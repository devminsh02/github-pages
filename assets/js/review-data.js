window.REVIEW_DATA = [
  {
    "id": "robotics-dummy-01",
    "section": "robotics",
    "title": "Dummy Robotics Review 01 — Diffusion Policy for Manipulation",
    "authors": "E. Robot, F. Control",
    "venue": "Lab Review",
    "year": 2026,
    "date": "2026-04-04",
    "summary": "Dummy robotics review used to test the robotics list page and markdown detail rendering.",
    "tags": [
      "Dummy",
      "Robotics",
      "Manipulation"
    ],
    "filePath": "reviews/robotics/robotics-dummy-01.md",
    "html": "<h1>Initial read</h1>\n<p>This dummy file checks whether the <strong>ROBOTICS</strong> archive behaves like a compact research board.</p>\n<h2>Claimed benefit</h2>\n<p>Diffusion-based action generation may improve trajectory diversity in manipulation tasks.</p>\n<h2>What I would challenge</h2>\n<ol>\n<li>Are the tasks too scripted?</li>\n<li>Does performance drop with real sensor noise?</li>\n<li>Are comparisons against strong baselines fair?</li>\n</ol>\n<h2>Notes for implementation</h2>\n<pre><code class=\"language-python\">observation = encode(scene)\naction_plan = sample_policy(observation)\nexecute(action_plan)\n</code></pre>\n<h2>Verdict</h2>\n<p>Promising structure, insufficient evidence without harsher real-world testing.</p>\n"
  },
  {
    "id": "llm-dummy-01",
    "section": "llm",
    "title": "Dummy LLM Review 01 — Retrieval-Augmented Agents for Research Workflows",
    "authors": "I. Analyst, J. Builder",
    "venue": "Research Notes",
    "year": 2026,
    "date": "2026-04-04",
    "summary": "Dummy LLM review for testing markdown archives, tags, and section-specific listing.",
    "tags": [
      "Dummy",
      "LLM",
      "RAG"
    ],
    "filePath": "reviews/llm/llm-dummy-01.md",
    "html": "<h1>Why this matters</h1>\n<p>This placeholder review checks whether an <strong>LLM</strong> markdown note can be opened cleanly from a board-style list.</p>\n<h2>Useful claim</h2>\n<p>Retrieval helps most when the workflow requires transparent evidence and failure visibility.</p>\n<h2>Checklist</h2>\n<ul>\n<li>Is the retrieval layer fresh enough?</li>\n<li>Are citations attached to generated claims?</li>\n<li>Does the system fail loudly when retrieval misses?</li>\n</ul>\n<h2>Skeptical conclusion</h2>\n<p>A lot of the reported gain may come from disciplined document handling rather than model capability alone.</p>\n"
  },
  {
    "id": "cv-dummy-01",
    "section": "cv",
    "title": "Dummy CV Review 01 — Open-Vocabulary Detection for Embodied Perception",
    "authors": "A. Vision, B. System",
    "venue": "Archive Notes",
    "year": 2026,
    "date": "2026-04-04",
    "summary": "Dummy markdown entry for testing the CV archive list and the shared review viewer.",
    "tags": [
      "Dummy",
      "CV",
      "Detection"
    ],
    "filePath": "reviews/cv/cv-dummy-01.md",
    "html": "<h1>Core claim</h1>\n<p>This dummy review tests whether a <strong>computer vision</strong> entry can appear in the CV list and open inside the same article viewer.</p>\n<h2>Why it is interesting</h2>\n<p>The paper claims that open-vocabulary detection can reduce manual relabeling when a robot must adapt to new objects.</p>\n<h2>What I would check first</h2>\n<ul>\n<li>Whether the benchmark has real long-tail categories.</li>\n<li>Whether latency is acceptable for embodied use.</li>\n<li>Whether the gain survives camera changes.</li>\n</ul>\n<h2>Skeptical note</h2>\n<blockquote>\n<p>Better labels are useful, but the result may still depend more on data curation than on the detection architecture itself.</p>\n</blockquote>\n<h2>Practical takeaway</h2>\n<p>If I reuse the idea, I would isolate the detector from the downstream policy and validate both separately.</p>\n"
  },
  {
    "id": "etc-dummy-01",
    "section": "etc",
    "title": "Dummy ETC Review 01 — Multimodal UI Agents for Desktop Automation",
    "authors": "M. Interface, N. Agent",
    "venue": "Archive Draft",
    "year": 2026,
    "date": "2026-04-03",
    "summary": "Dummy miscellaneous review for testing the ETC archive and shared markdown viewer.",
    "tags": [
      "Dummy",
      "ETC",
      "Agents"
    ],
    "filePath": "reviews/etc/etc-dummy-01.md",
    "html": "<h1>Overview</h1>\n<p>This is a miscellaneous placeholder review for anything that does not belong to the other three sections.</p>\n<h2>Interesting part</h2>\n<p>A multimodal agent can connect screen observations to action candidates without a fully scripted interface map.</p>\n<h2>Concern</h2>\n<p>The benchmark may be too close to deterministic RPA tasks, which makes the claimed generality questionable.</p>\n"
  },
  {
    "id": "cv-dummy-02",
    "section": "cv",
    "title": "Dummy CV Review 02 — Token Compression in Vision Transformers",
    "authors": "C. Encoder, D. Reviewer",
    "venue": "Working Summary",
    "year": 2026,
    "date": "2026-04-03",
    "summary": "Placeholder markdown review with lists and a small table for the CV category.",
    "tags": [
      "Dummy",
      "CV",
      "ViT"
    ],
    "filePath": "reviews/cv/cv-dummy-02.md",
    "html": "<h1>Summary</h1>\n<p>This entry is a placeholder review that exists only to verify the archive layout.</p>\n<h2>Question</h2>\n<p>Can token compression reduce cost without destroying the spatial detail needed for downstream recognition?</p>\n<h2>Comparison sketch</h2>\n<table>\n<thead>\n<tr>\n  <th>Criterion</th>\n  <th>Why it matters</th>\n  <th>My note</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n  <td>Throughput</td>\n  <td>Affects deployment</td>\n  <td>Important</td>\n</tr>\n<tr>\n  <td>Detail loss</td>\n  <td>Affects accuracy</td>\n  <td>Important</td>\n</tr>\n<tr>\n  <td>Stability</td>\n  <td>Affects tuning</td>\n  <td>Medium</td>\n</tr>\n</tbody>\n</table>\n<h2>My stance</h2>\n<p>The paper is only convincing if efficiency gains hold under distribution shift and not just on tidy validation sets.</p>\n"
  },
  {
    "id": "robotics-dummy-02",
    "section": "robotics",
    "title": "Dummy Robotics Review 02 — Vision-Language Planning for Mobile Manipulators",
    "authors": "G. Planner, H. Engineer",
    "venue": "Prototype Archive",
    "year": 2026,
    "date": "2026-04-02",
    "summary": "Another dummy markdown review for robotics, focused on planning and evaluation concerns.",
    "tags": [
      "Dummy",
      "Robotics",
      "Planning"
    ],
    "filePath": "reviews/robotics/robotics-dummy-02.md",
    "html": "<h1>What the paper tries to do</h1>\n<p>The system maps a high-level instruction to a sequence of grounded subgoals for a mobile manipulator.</p>\n<h2>Strong points</h2>\n<ul>\n<li>The decomposition story is readable.</li>\n<li>Failure cases are visible.</li>\n<li>The interface between planning and control is explicit.</li>\n</ul>\n<h2>Weak points</h2>\n<p>The language model may get too much credit for improvements that mostly come from better task decomposition and cleaner environment assumptions.</p>\n"
  },
  {
    "id": "llm-dummy-02",
    "section": "llm",
    "title": "Dummy LLM Review 02 — Long-Context Evaluation Beyond Needle Tests",
    "authors": "K. Reader, L. Evaluator",
    "venue": "Internal Working Draft",
    "year": 2026,
    "date": "2026-04-01",
    "summary": "Dummy markdown file with ordered lists and blockquotes for the LLM section.",
    "tags": [
      "Dummy",
      "LLM",
      "Evaluation"
    ],
    "filePath": "reviews/llm/llm-dummy-02.md",
    "html": "<h1>Main question</h1>\n<p>Can long-context models actually reason over extended documents, or do they mostly retrieve isolated spans?</p>\n<h2>Evaluation concerns</h2>\n<ol>\n<li>Needle tests can overstate useful context handling.</li>\n<li>Synthetic tasks can hide memory failure modes.</li>\n<li>Real workflows need citation and synthesis, not just recall.</li>\n</ol>\n<blockquote>\n<p>Long context is not the same thing as reliable document reasoning.</p>\n</blockquote>\n<h2>My note</h2>\n<p>I would trust the paper more if it included adversarial distractors and task-level success criteria.</p>\n"
  },
  {
    "id": "etc-dummy-02",
    "section": "etc",
    "title": "Dummy ETC Review 02 — Benchmark Skepticism for General-Purpose Agents",
    "authors": "O. Critic, P. Tester",
    "venue": "Notebook Entry",
    "year": 2026,
    "date": "2026-03-31",
    "summary": "Dummy ETC entry that checks whether mixed-format markdown still renders correctly inside the review page.",
    "tags": [
      "Dummy",
      "ETC",
      "Benchmarking"
    ],
    "filePath": "reviews/etc/etc-dummy-02.md",
    "html": "<h1>Quick take</h1>\n<p>This entry exists to verify that the ETC section can feel like a lightweight board instead of a generic static page.</p>\n<h2>Minimal rubric</h2>\n<table>\n<thead>\n<tr>\n  <th>Check</th>\n  <th>Why it exists</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n  <td>Coverage</td>\n  <td>Avoid narrow tasks</td>\n</tr>\n<tr>\n  <td>Failure visibility</td>\n  <td>Prevent misleading averages</td>\n</tr>\n<tr>\n  <td>Transfer</td>\n  <td>Measure actual generalization</td>\n</tr>\n</tbody>\n</table>\n<h2>Conclusion</h2>\n<p>The benchmark is only useful if it reveals where the agent breaks, not just where a demo succeeds.</p>\n"
  }
];
