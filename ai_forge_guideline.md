# About the team

## Mission
Experimental AI initiative building and testing personalized AI models against current generic solutions.

## Focus areas
- Product Domain: ajobthing.com, maukerja.my, ricebowl.my
- Work Process Domain: Internal tools and workflows

## Linear identifier
- Team name: AI Forge – Strategy
- Identifier (used in Issue's ID): AI
- `UUID`: cc591c6c-25f6-4292-90a5-179b480c774f

## Core Principles
1. No one has all the answers individually - we succeed by combining knowledge
2. Data and user feedback drive decisions, not assumptions
3. Experiment quickly, get feedback, adjust based on results
4. Build minimum viable solution first, improve based on learning
5. No MVP stays as MVP - evolve or sunset entirely

---

## Linear issues

### Field Mapping

#### Title
Clear descriptive title in title case

#### Description
Use the content template below. The content of an issue might be different based on the type of the issue and the issue level (parent or child issue).

#### Labels
There are two groups of labels. Implement the ideal label based on the issue context.

##### `Issue Type` group
- `Task`: Common tasks and chores. Can be used as default label if none of the existing label in this group fits the issue content
- `🤯 Drama`: Any unpleasantries such as bugs, usability issues, and others
- `Improvement`: Improvement of existing work
- `Research / Discovery`: Research or discovery process. Usually preliminary work that aims at gathering context for a `Task` or `Improvement` type issues.

#### Estimate
Commonly known as *Story Points*. We estimate an issue using the Fibonacci sequence: 0, 1, 2, 3, 5, 8, 13, 21. We estimate using two factors: **Uncertainty** and **Complexity**. Estimates depend on context; consider the task requirements and your familiarity with the work.

##### Uncertainty
Main question: *How well do we understand what needs to be done?*
- **Low**: Clear specifications, known approach, predictable outcome
- **Medium**: Some unknowns in approach, specifications, or success criteria
- **High**: Experimental work, unclear if approach will succeed

##### Complexity
Main question: *How hard is it to implement?*
- **Low**: Simple coding or straightforward analysis
- **Medium**: Requires technical design or moderate research
- **High**: Advanced algorithms, complex architecture, or in-depth research

##### Estimation matrix
| Matrix                 | Low Complexity | Medium Complexity | High Complexity |
| ---------------------- | -------------- | ----------------- | --------------- |
| **Low Uncertainty**    | 0 – 1          | 2 – 3             | 5 – 8           |
| **Medium Uncertainty** | 2 – 3          | 3 – 5             | 8 – 13          |
| **High Uncertainty**   | 5 – 8          | 8 – 13            | 13 – 21         |

### Issue templates

##### Parent issue

<!-- **Must Check**: Example of good parent issues are `AI-218`, `AI-395`. Parent issues should NOT include detailed requirements or acceptance criteria. These belong in the individual sub-issues that implement the solution. -->

```markdown
# Problem statement
<!-- Clearly define the issue or challenge that needs to be addressed. Include relevant context, business impact, and data to ensure understanding of the strategic problem. Focus on the "why" and scope of the initiative -->

---

# Approach
<!-- Briefly describe the approach or sub-components that will address this goal (referencing sub-tickets when applicable). -->

---

# Goal
<!-- Outline the desired outcome or objective at a strategic level. What are the specific results or improvements we aim to achieve? Include any success metrics or performance targets. -->
```

##### Child issue
Each child issue has a different template, depending on the type of the issues.

###### Task or Improvement

<!-- **Must Check**: Example of good task or improvement issues are `AI-228`, `AI-226` -->

```markdown
# Problem statement
<!-- Clearly define the specific issue or challenge that needs to be addressed. Include relevant technical details and context to ensure understanding of the implementation requirements. -->

---

# Goal
<!-- Outline the desired technical outcome or objective. What specific functionality or improvement will be delivered? -->

---

# Specification
<!-- Detailed and sophisticated specification. It need to be good enough to the point it can act as a spec or blueprint for an AI model to just simply execute, and can act as a very good documentation to understand what have been implemented. Elaborate and drill down on what the expected behavior is, technical guidance, dependencies, and constraints. Refer to `AI-228` for example. -->

---

# Acceptance criteria
<!-- Also known as "Definition of Done" (DOD). Write specific, measurable, testable conditions that define when this issue is complete in a checkbox format. Each criterion should be:
- Specific: Clear and unambiguous
- Measurable: Can be verified as done/not done
- Testable: Someone can check if it's completed
- Outcome-focused: Describes the end result, not the process

The rule of thumb is if these checkboxes are checked, then the linear issue can be considered as burned (complete) -->
```

###### Drama

```markdown
# How to reproduce

## Environment:
- Device/System:
- OS/Platform:
- Model Version:
- User/Context:
- Pre-conditions:

## Steps
<!-- Detailed step by step on how to reproduce the issue -->

## Preliminary findings
<!-- Optional. Include any initial analysis or suspected root cause if available. -->

---

# Expected behavior
<!-- Describe the expected behavior under normal conditions. -->
```

###### Research / Discovery

```markdown
# Background
<!-- What initiated this research? Explain the problem statements, initial hypothesis, findings, or any story that led to this research. -->

---

# Research question
<!-- What specific question are we trying to answer through this research? The question should be clear and focused enough to guide the research approach, measurable and testable in nature, and directly aligned with the background context provided above. -->

---

# Acceptance criteria
<!-- Also known as "Definition of Done" (DOD). Write specific and measurable conditions that define when this issue is complete in a checkbox format. Each criterion should be:
- Specific: Clear and unambiguous
- Measurable: Can be verified as done/not done
- Outcome-focused: Describes the end result, not the process

The rule of thumb is if these checkboxes are checked, then the issue can be considered as burned (complete) -->
```

### Issue formatting
<!-- Follow the formatting consistently throughout the linear issue. -->
1. Headers: H1 should be reserved for the core sections of an issue. The rest can be applied based on the respective hierarchies (e.g H2, H3, H4, and so on).  Capitalize first word only in section headings, example: `# Problem statement` or `Preliminary findings`
2. Add line breaks (divider) before starting a new H1
3. Use lowercase with underscores for any file references, for example: `file_name.py`
4. Use markdown formatting consistently throughout descriptions

Additionally, check any available issue example to understand the right content and formatting.

---

## Guidelines for Claude Code

When analyzing projects and creating issues:

1. **Understand Context**: Consider the experimental nature and AI/ML focus
2. **Estimate Appropriately**: Use the uncertainty/complexity matrix for AI work
3. **Write Clear Titles**: Descriptive, actionable, title case
4. **Focus on Outcomes**: Acceptance criteria should define success clearly
5. **Consider Dependencies**: Think about experiment sequencing and team coordination
6. **Match Team Philosophy**: Emphasize quick experiments and data-driven decisions

**Remember**: This team values rapid experimentation over perfect planning. Issues should enable quick iteration and learning rather than comprehensive upfront specification.
