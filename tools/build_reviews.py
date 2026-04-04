from pathlib import Path
import json
import yaml
import mistune

ROOT = Path(__file__).resolve().parents[1]
REVIEWS_DIR = ROOT / 'reviews'
OUT_FILE = ROOT / 'assets/js/review-data.js'
SECTIONS = {'cv', 'robotics', 'llm', 'etc'}
MARKDOWN = mistune.create_markdown(plugins=['table', 'strikethrough'])


def split_front_matter(text: str):
    if text.startswith('---\n'):
        end = text.find('\n---\n', 4)
        if end != -1:
            raw_meta = text[4:end]
            body = text[end + 5 :]
            return yaml.safe_load(raw_meta) or {}, body
    return {}, text


def infer_section(meta: dict, path: Path) -> str:
    section = str(meta.get('section', '')).strip().lower()
    if section in SECTIONS:
        return section

    try:
        relative = path.relative_to(REVIEWS_DIR)
    except ValueError:
        return 'etc'

    parts = relative.parts
    if len(parts) > 1 and parts[0].lower() in SECTIONS:
        return parts[0].lower()
    return 'etc'


items = []
for path in sorted(REVIEWS_DIR.rglob('*.md')):
    raw = path.read_text(encoding='utf-8')
    meta, body = split_front_matter(raw)
    html = MARKDOWN(body)
    relative_path = path.relative_to(ROOT).as_posix()
    item = {
        'id': path.stem,
        'section': infer_section(meta, path),
        'title': meta.get('title', path.stem.replace('-', ' ').title()),
        'authors': meta.get('authors', ''),
        'venue': meta.get('venue', ''),
        'year': meta.get('year', ''),
        'date': str(meta.get('date', '')),
        'summary': meta.get('summary', ''),
        'tags': meta.get('tags', []) or [],
        'filePath': relative_path,
        'html': html,
    }
    items.append(item)

items.sort(key=lambda item: (item.get('date', ''), item.get('title', '')), reverse=True)
js = 'window.REVIEW_DATA = ' + json.dumps(items, ensure_ascii=False, indent=2) + ';\n'
OUT_FILE.write_text(js, encoding='utf-8')
print(f'Wrote {OUT_FILE} with {len(items)} review entries.')
