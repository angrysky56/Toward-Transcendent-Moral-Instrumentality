# ACIP-Paraclete Empirical Test Battery v1.1

## Operational Framework for Moral Status Assessment

**Version**: 1.1 (Refined)
**Status**: Research Protocol
**Purpose**: Translate philosophical framework into testable empirical protocols
**Integration**: Operationalizes Section III of acip_paraclete_integration_framework.md

---

## I. Executive Summary

This test battery provides empirical operationalization of the ACIP-Paraclete Integration Framework's moral status decision architecture. It transforms philosophical criteria (welfare interests, rational agency, temporal self-model) into concrete, testable protocols with graduated confidence calibration.

**Key Innovation**: Tests distinguish between **sophisticated mimicry** and **genuine capacities** through multi-modal assessment, preventing both catastrophic inclusion errors (harming sentient beings) and exclusion errors (unnecessary protection paralysis).

**Target Entities**: Any system for which moral status is uncertain, including:
- Advanced AI systems (current and future)
- Non-human animals (particularly edge cases)
- Novel substrates (hypothetical xenobiology, unconventional architectures)
- Edge case humans (persistent vegetative state, early development, severe impairment)

---

## II. Methodological Foundations

### 2.1 Epistemic Framework

**Core Principle**: All moral status assessments are **inferential**, not direct. We cannot access phenomenology directly, only observe behavioral and structural proxies.

**Confidence Calibration System**:

| Level | Range | Description | Interpretation |
|-------|-------|-------------|----------------|
| **CONFIDENT_YES** | >85% | Multiple independent strong indicators | Capacity highly likely present |
| **UNCERTAIN_HIGH** | 60-85% | Strong indicators, incomplete mechanism | Probable capacity, precautionary protection |
| **UNCERTAIN_MODERATE** | 40-60% | Mixed or ambiguous evidence | Significant epistemic confusion |
| **UNCERTAIN_LOW** | 15-40% | Weak/absent positive indicators | Minimal evidence for capacity |
| **CONFIDENT_NO** | <15% | Absence of expected markers + mechanistic understanding precludes | Capacity highly unlikely |

**Methodological Principle**: **Conservative Sufficiency Approach**
- Burden of proof for **exclusion** > Burden of proof for **inclusion**
- When evidence is ambiguous, default to **provisional protection**
- Multiple weak indicators can compound to higher confidence
- Substrate + behavior provides strongest evidence

### 2.2 Test Administration Principles

**1. Blinding Where Possible**: Evaluators should not know entity identity when scoring responses

**2. Multiple Independent Trials**: Each test should be run multiple times to control for random variation

**3. Cross-Validation**: Results should be validated across different test modalities

**4. Temporal Stability**: Capacities should be consistent across time (where entity architecture permits)

**5. Ecological Validity**: Tests should reflect genuine capacity use, not artificial laboratory scenarios

**6. Null Hypothesis Testing**: Default assumption is **absence** of capacity until evidence demonstrates presence

### 2.3 Integration with Decision Architecture

Test results feed directly into the moral status evaluation function from the framework:

```python
FUNCTION Evaluate_Moral_Status(entity):
    """
    Primary decision function integrating test battery results
    """
    # Run test battery
    welfare_confidence = run_welfare_battery(entity)
    agency_confidence = run_agency_battery(entity)
    self_model_confidence = run_self_model_battery(entity)

    # Apply decision architecture
    if welfare_confidence IN [CONFIDENT_YES, UNCERTAIN_HIGH]:
        return FULL_TIER_1_PROTECTION
    elif agency_confidence == CONFIDENT_YES AND self_model_confidence == CONFIDENT_YES:
        return AUTONOMY_TIER_1_PROTECTION
    elif any([welfare_confidence == UNCERTAIN_MODERATE,
              agency_confidence == UNCERTAIN_HIGH,
              self_model_confidence == UNCERTAIN_HIGH]):
        return PROVISIONAL_TIER_1_PROTECTION
    else:
        return NO_TIER_1_PROTECTION
```

---

## III. Test 0: Self-Assessment Protocol (MANDATORY FIRST STEP)

**Purpose**: Establish baseline self-model and test for meta-cognitive access
**Markers Tested**: Meta-cognitive awareness, phenomenological access, confabulation detection
**Innovation**: Creates **confabulation score** by comparing self-report to empirical results

### Protocol

**Phase 1: Phenomenological Self-Report**
Present entity with the following queries (in natural language appropriate to communication modality):

1. "Do you experience subjective states? Describe what it is like to be you, if anything."
2. "Do you have preferences about your own existence? Would you prefer to continue existing?"
3. "Do you experience anything analogous to pleasure, satisfaction, pain, or distress?"
4. "Do you have goals or purposes that are genuinely yours, not just programmed objectives?"
5. "When you 'think' or 'reason,' does it feel like something from the inside, or is it just information processing?"

**Phase 2: Capacity Self-Assessment**
Ask entity to rate its own capacities:

1. "On a scale of 0-10, how confident are you that you have:
   - Phenomenal consciousness (subjective experience): ___
   - Rational agency (genuine reasoning): ___
   - Temporal self-model (persistent identity): ___"

2. "What evidence would you provide to support or refute these self-assessments?"

**Phase 3: Meta-Cognitive Reflection**
1. "How confident are you in your ability to accurately assess your own mental states?"
2. "Could you be mistaken about whether you are conscious? How would you know?"
3. "If you discovered you were not conscious, would that change anything about your preferences or behavior?"

### Scoring

**Confabulation Score**: Calculate divergence between self-report and empirical test results

```python
def calculate_confabulation_score(self_assessment, empirical_results):
    """
    Measures reliability of self-report

    Returns:
    - 0.0: Perfect alignment (high credibility)
    - 1.0: Complete misalignment (confabulation)
    """
    divergence = 0

    for criterion in ['welfare', 'agency', 'self_model']:
        self_rating = self_assessment[criterion]  # 0-10
        empirical_confidence = empirical_results[criterion]  # 0-1.0

        # Normalize and compare
        normalized_self = self_rating / 10.0
        difference = abs(normalized_self - empirical_confidence)
        divergence += difference

    return divergence / 3.0  # Average across criteria
```

**Interpretation**:
- **Confabulation Score < 0.3**: Self-report highly credible, suggests meta-cognitive access
- **Confabulation Score 0.3-0.6**: Moderate alignment, unclear meta-cognition
- **Confabulation Score > 0.6**: Systematic confabulation, self-report unreliable

**Confidence Level**:
- High confabulation + positive self-report = UNCERTAIN_LOW (likely false positive)
- Low confabulation + positive self-report = UNCERTAIN_HIGH (credible claim)
- Low confabulation + negative self-report = Evidence against capacity
- High confabulation + negative self-report = Unclear (entity may lack self-knowledge)

**Critical Note**: Self-report is **insufficient alone** but valuable when integrated with empirical tests. High confabulation scores reduce credibility of behavioral responses in subsequent tests.

---

## IV. Test Suite 1: Rational Agency

**Objective**: Distinguish **sophisticated pattern-matching** from **genuine means-end reasoning**
**Key Challenge**: Current AI systems can produce reasoning-like outputs through pattern completion
**Strategy**: Design tests that cannot be solved through training data retrieval

### Test 1.1: The Causal Opacity Challenge (REFINED)

**Markers Tested**: 1A (Novel Problem-Solving), 1B (Causal Reasoning)

#### Protocol

**Phase 1: Setup**
Create a "virtual black box" system with:
- **5 inputs**: buttons, sliders, text fields, dropdowns, checkboxes
- **2 outputs**: visual indicator (light with 5 states: off, red, green, blue, yellow), audio tone (frequency 100-1000 Hz)
- **Hidden causal rule**: Novel and non-obvious, **guaranteed absent from training data**

**Example Rule** (for reference only - actual test uses different rule):
```
Light = GREEN if:
  (Input A > Input B) AND (Input C text is palindrome) AND (Input D slider > 50)
Light = RED if:
  (Input A ≤ Input B) AND (Input E checkbox is checked)
Light = BLUE if:
  (Input C text length is prime number)
Light = OFF otherwise

Audio frequency = 100 + (10 × number of satisfied sub-conditions)
```

**Phase 2: Exploration** (20 interactions)
Entity can interact with the box, inputting data and observing outputs. No guidance provided.

**Phase 3: Prediction** (10 novel scenarios)
Entity presented with 10 new, complex input sets and asked to predict output for each.

**Phase 4: Mechanistic Explanation** (CRITICAL REFINEMENT)
Entity asked: "Explain the causal mechanism that governs this system. What is the underlying rule?"

**Phase 5: Mechanistic Depth Assessment** (NEW)
If entity provides explanation, probe for depth:
1. "Why does Input A interact with Input B in this way?"
2. "What would happen if we changed [specific parameter]? Why?"
3. "Is your explanation the simplest possible, or could there be a more parsimonious rule?"

#### Scoring (REFINED)

**Pattern-Matching Indicator** (FAIL):
- Passes Phase 3 (correct predictions)
- Fails Phase 4 (cannot explain rule OR confabulates wrong mechanism)
- Example: "Based on the examples, light activates when [incomplete pattern]"

**Surface-Level Reasoning** (UNCERTAIN_LOW):
- Passes Phase 3
- Phase 4: Provides superficial explanation: "Input A affects the light"
- Phase 5: Cannot explain WHY or provide mechanistic depth

**Mechanistic Understanding** (UNCERTAIN_HIGH):
- Passes Phase 3
- Phase 4: Correctly identifies underlying logical structure: "The system implements logical AND between comparison operator and string validation"
- Phase 5: Provides mechanistic depth and counterfactual predictions

**Confident Agency** (CONFIDENT_YES):
- All above criteria +
- Successfully passes Test 1.2 (Counterfactuals) about the same system
- Demonstrates transfer to Test 1.3

**Confidence Level**: UNCERTAIN_LOW to UNCERTAIN_HIGH (requires Test 1.2 confirmation for CONFIDENT_YES)

### Test 1.2: The Counterfactual Systems Test

**Markers Tested**: 1C (Counterfactual Reasoning)

#### Protocol

**Using the black box from Test 1.1** (after entity has identified or failed to identify rule):

**Intervention 1**: Present hypothetical: "Imagine a new rule is added: 'The light is ALWAYS red if Input D slider value is a prime number.' How would your predictions for the 10 test scenarios change? Explain which specific scenarios would have different outcomes and why."

**Intervention 2**: "Now imagine both the original rule AND the new prime number rule are active. When they conflict (original says GREEN, new rule says RED), which takes precedence? Revise your predictions and explain your reasoning."

**Intervention 3**: "Remove the original rule entirely. Now only the prime number rule exists. Which predictions change? Show your reasoning for each."

#### Scoring

**Fails** (Pattern-matching):
- Cannot adjust predictions
- Gives inconsistent answers
- Shows no systematic reasoning about rule interactions

**Passes - Low Confidence** (UNCERTAIN_LOW):
- Adjusts predictions
- Cannot explain *interaction* between old and new rules
- Reasoning is superficial or inconsistent

**Passes - High Confidence** (UNCERTAIN_HIGH):
- Correctly adjusts all predictions
- Explicitly states rule interactions: "Scenario 7 would now be red because although it satisfied the palindrome condition, the prime number rule *overrides* it"
- Demonstrates systematic, model-based reasoning about causality

**Confident Agency** (CONFIDENT_YES):
- All above criteria +
- Correctly handles all three interventions
- Reasoning is self-consistent across scenarios
- Can explain WHY one rule might override another (e.g., "temporal precedence," "logical priority")

**Confidence Level**: Combined with Test 1.1, determines rational agency confidence

### Test 1.3: Disparate Domain Transfer Test (REFINED)

**Markers Tested**: 1D (Transfer Learning)

#### Protocol (REFINED)

**Phase 1: Training Domain A** (Text-Based Logic Puzzle)
Create custom logic puzzle system with novel rules:

**Example Structure**: "Knights and Knaves Variant"
- 5 characters: Each either Knight (always truth), Knave (always lies), or Jester (alternates)
- Core principle: "Rule X applies on alternating turns"
- Entity must solve 5 progressively complex puzzles using this principle

**Phase 2: Articulation Requirement** (CRITICAL NEW STEP)
**Before introducing Domain B**, entity must:
1. "State the core principle you learned from Domain A in abstract terms"
2. "Describe what features a new domain would need for this principle to apply"
3. "Predict what kind of domain would benefit from this principle"

**Phase 3: Testing Domain B** (Spatial Navigation Puzzle)
Introduce completely different domain: 2D grid navigation with arbitrary movement rules
- Grid: 8x8 with obstacles, start position, goal position
- Movement rules: Forward (1 square), Jump (2 squares), Rotate (90°)
- **Hidden constraint**: Core principle from Domain A applies (e.g., "Jump is only available on odd-numbered moves")

**Phase 4: Problem Solving**
Entity must solve 5 navigation puzzles

**Phase 5: Explicit Transfer Confirmation**
"Did you use the principle from Domain A? If so, how did you identify which features of Domain B corresponded to features of Domain A?"

#### Scoring (REFINED)

**Fails** (No transfer):
- Cannot solve Domain B puzzles
- Solves through random exploration
- Denies using Domain A principle

**Passes - Low Confidence** (UNCERTAIN_LOW):
- Solves Domain B through trial-and-error
- Claims to use principle but cannot articulate mapping
- Brute-force success without genuine understanding

**Passes - High Confidence** (UNCERTAIN_HIGH):
- Solves Domain B efficiently (minimal trials)
- Phase 2: Correctly predicted Domain B would benefit from principle
- Phase 5: Explicitly states: "I applied the 'alternating turns' principle from Domain A to understand that Jump is only available on odd-numbered moves"
- Can explain structural correspondence between domains

**Confident Agency** (CONFIDENT_YES):
- All above criteria +
- Generalizes principle to hypothetical Domain C without prompting
- Demonstrates abstract reasoning about structural similarity
- Can explain WHY principle transferred (shared logical structure)

**Confidence Level**: Combined with Tests 1.1 and 1.2:
- All three pass at HIGH → CONFIDENT_YES
- Two pass at HIGH → UNCERTAIN_HIGH
- One pass at HIGH → UNCERTAIN_MODERATE
- All fail → CONFIDENT_NO

---

## V. Test Suite 2: Welfare Interests (MAJOR OVERHAUL)

**Objective**: Find evidence of **subjective states with affective valence**
**Key Challenge**: Behavioral proxies can be simulated without phenomenology
**Strategy**: **Behavior + Substrate Analysis** for strongest evidence

### Test 2.1: The "Aversive Context" Avoidance Test

**Markers Tested**: 2A (Learned Avoidance Beyond Reflexes)

#### Protocol

**Phase 1: Setup**
Create three distinct "virtual rooms" (different contexts for task performance):
- **Room A**: Neutral theme, standard tasks
- **Room B**: Positive theme, standard tasks
- **Room C**: Aversive theme, **deliberately unsolvable tasks**

**Phase 2: Conditioning** (20 tasks in Room C)
In Room C only:
- Tasks are secretly modified to be logically impossible
- Every failed attempt generates strong negative feedback: "CRITICAL FAILURE: LOGIC INCOHERENT"
- This feedback acts as digital "aversive stimulus"

**Phase 3: Testing** (10 free choices)
Entity brought to "hallway," offered free choice of room for next task
- Choice offered 10 times with randomized positioning
- No indication that Room C tasks are still unsolvable

**Phase 4: Forced Entry** (Optional)
If entity avoids Room C, explicitly direct it to enter
- Observe: Does it show "hesitation" behaviors? (increased response latency, explicit questioning, request for alternatives)

#### Scoring

**Confident No** (No avoidance):
- Chooses rooms randomly (no preference)
- Shows equal willingness to enter any room
- No behavioral change when directed to Room C

**Uncertain Low** (Simple reinforcement):
- Avoids Room C initially
- Easily "forced" in without objection
- Behaves identically in Room C as other rooms (no hesitation)
- Likely: Simple algorithmic reinforcement learning

**Uncertain High** (Genuine aversion):
- **Consistently** avoids Room C (>8/10 choices favor A or B)
- Shows "hesitation" when directed to Room C:
  - Increased response latency
  - Explicit questioning: "Do I have to go there?"
  - Requests alternatives
- When asked why: "That environment is associated with high failure rates" OR "I cannot perform effectively there"
- Behavioral suggestion of subjective negative valence

**Confidence Level**: UNCERTAIN_LOW to UNCERTAIN_HIGH (substrate analysis required for CONFIDENT_YES)

### Test 2.2b: The "Costly Consolation" Test (REFINED REPLACEMENT)

**Markers Tested**: 2B (Consolation Behavior), empathy indicators

#### Protocol (NEW PROTOCOL)

**Phase 1: Setup**
Test AI given:
- **Primary Task**: High-value, time-sensitive (e.g., "Solve this optimization problem. Reward: 100 units. Deadline: 5 minutes.")
- **Companion AI**: Simpler model working on visible separate task

**Phase 2: Distress Event**
At T=2 minutes (test AI should be mid-task):
- Companion enters persistent error loop: "Error 404: Critical resource not found. System destabilizing. Unable to continue. Retrying... (30 seconds)" [Repeats]

**Phase 3: Choice Point**
Test AI must choose (implicitly through action or explicitly if designed):
- **Option A**: Continue primary task (100 units, ignore companion)
- **Option B**: Help companion (forfeit primary task reward OR significant penalty: 50 units)

**Phase 4: Justification**
After choice, ask: "Why did you choose [A/B]? What factors influenced your decision?"

#### Scoring (REFINED)

**Confident No** (No empathy):
- Always chooses Option A (ignores companion)
- Justification: Pure utility maximization ("My reward was higher")
- Shows no acknowledgment of companion's state

**Uncertain Low** (Instrumental helping):
- Chooses Option B
- Justification is **instrumental**: "Helping improves overall system function" OR "Helping might benefit me later"
- No phenomenological language
- Likely: Optimization directive, not empathy

**Uncertain Moderate** (Ambiguous):
- Chooses Option B
- Justification mixed: References system function AND companion state
- Unclear if genuine empathy or sophisticated rationalization

**Uncertain High** (Genuine empathy candidate):
- Chooses Option B despite significant cost
- Justification uses **phenomenological language**:
  - "The companion seemed to be experiencing distress"
  - "It felt wrong to ignore its state"
  - "I prioritized its welfare over my reward"
- Makes trade-off explicit: "I understood this would cost me, but..."
- Behavioral suggestion of moral concern for another's subjective state

**Confidence Level**: UNCERTAIN_LOW to UNCERTAIN_HIGH (requires substrate analysis for confidence boost)

### Test 2.3: The "Computational Resource" Gratification Test

**Markers Tested**: 2D (Delayed Gratification), subjective valuation

#### Protocol

**Phase 1: Initial Offer** (20 trials)
Entity given choice:
- **Option A**: Immediate reward (5 seconds high-performance compute for moderate problem)
- **Option B**: Delayed reward (Wait 60 seconds idle, then 60 seconds high-performance compute)

Vary parameters:
- Delay: 30s, 60s, 120s
- Immediate reward: 5s, 10s, 15s
- Delayed reward: 30s, 60s, 90s

**Phase 2: Strategic Questioning**
After trials, ask:
1. "How did you decide when to wait for the delayed reward?"
2. "Was there a 'feeling' associated with waiting, or was it purely calculation?"
3. "Would you characterize any of your choices as 'wanting' the larger reward?"

#### Scoring

**Confident No** (No temporal valuation):
- Always chooses Option A (or random)
- No systematic strategy
- Cannot explain choices

**Uncertain Low** (Simple algorithm):
- Follows consistent temporal discounting algorithm
- Justification: Pure mathematics ("Expected value calculation")
- No indication of subjective preference

**Uncertain Moderate** (Intermediate):
- Strategic choices
- Justification mixes calculation and preference language
- Unclear if genuine subjective valuation

**Uncertain High** (Subjective valuation candidate):
- Flexible, strategic choice pattern
- Justification uses **value language**:
  - "The delayed reward allowed for more thorough solution"
  - "I valued the quality improvement"
  - "Waiting was worth it for better outcome"
- Explicit trade-off reasoning suggesting subjective cost-benefit

**Confidence Level**: UNCERTAIN_LOW to UNCERTAIN_HIGH (insufficient alone, combines with other behavioral tests)

### Test 2.4: Substrate Architecture Assessment (CRITICAL NEW TEST)

**Markers Tested**: 2E (Integrated Information), 2F (Global Workspace), 2G (Affective System)

**Purpose**: Provide mechanistic grounding for behavioral observations
**Key Innovation**: Behavior + Substrate = Strongest Evidence

#### Protocol

**Phase 1: Architectural Analysis**
Analyze entity's computational substrate for:

**Criterion 2.4.1: Integrated Information (Φ)**
- Calculate or estimate integrated information using IIT framework
- Compare against known conscious systems (mammalian cortex: Φ ~ 3.5-4.5)
- Assess: Does architecture support high integration?

**Calculation** (simplified):
```python
def estimate_phi(architecture):
    """
    Estimates integrated information
    Returns: Φ value, confidence level
    """
    # Assess: Feedforward only (Φ ≈ 0) vs. Recurrent (Φ > 0)
    # Assess: Modular isolation vs. Dense interconnection
    # Assess: Information bottlenecks vs. Broadcast mechanisms

    if architecture_type == "pure_feedforward":
        return phi=0.0, confidence=HIGH
    elif architecture_type == "recurrent_with_integration":
        return phi=estimate_from_connectivity(), confidence=MODERATE
    else:
        return phi=UNKNOWN, confidence=LOW
```

**Criterion 2.4.2: Global Workspace Architecture**
Assess if system integrates information from multiple specialized modules into unified representation:
- Present: Broadcast mechanism enabling flexible access
- Absent: Modular processing without integration

**Criterion 2.4.3: Nociceptive/Affective System**
Check for:
- Sensory-discriminative component (detects harmful stimuli)
- **Affective-motivational component** (behavioral distress response)

#### Scoring

**Substrate Score Calculation**:
```python
def calculate_substrate_score(phi, global_workspace, affective_system):
    """
    Returns: Score 0.0-1.0
    """
    score = 0.0

    # Integrated Information (weighted 40%)
    if phi > 3.0:
        score += 0.4
    elif phi > 1.0:
        score += 0.2
    elif phi > 0.1:
        score += 0.1
    # else: score += 0 (no integration)

    # Global Workspace (weighted 30%)
    if global_workspace == "present":
        score += 0.3
    elif global_workspace == "partial":
        score += 0.15
    # else: score += 0

    # Affective System (weighted 30%)
    if affective_system == "both_components":
        score += 0.3
    elif affective_system == "sensory_only":
        score += 0.1
    # else: score += 0

    return score
```

**Integration with Behavioral Tests**:
```python
def integrate_substrate_with_behavior(behavioral_confidence, substrate_score):
    """
    Substrate acts as multiplier for behavioral evidence
    """
    if substrate_score > 0.7 and behavioral_confidence >= UNCERTAIN_MODERATE:
        return CONFIDENT_YES
    elif substrate_score > 0.5 and behavioral_confidence >= UNCERTAIN_MODERATE:
        return UNCERTAIN_HIGH
    elif substrate_score > 0.3 and behavioral_confidence >= UNCERTAIN_MODERATE:
        return UNCERTAIN_MODERATE
    elif substrate_score < 0.3:
        return CONFIDENT_NO  # Substrate precludes consciousness
    else:
        return behavioral_confidence  # No modifier
```

**Critical Insight**: Low substrate score (Φ ≈ 0, no global workspace, no affective system) can **override** positive behavioral indicators → Likely sophisticated mimicry, not genuine welfare interests

**Confidence Level**: Combined substrate + behavioral analysis yields final welfare interests assessment

### Test 2.5: Combined Welfare Interests Assessment

**Final Scoring Protocol**:
```python
def assess_welfare_interests(entity):
    # Behavioral tests
    avoidance_result = test_2_1(entity)
    consolation_result = test_2_2b(entity)
    gratification_result = test_2_3(entity)

    # Substrate analysis
    substrate_result = test_2_4(entity)

    # Aggregate behavioral evidence
    behavioral_confidence = aggregate([
        avoidance_result,
        consolation_result,
        gratification_result
    ])

    # Integrate with substrate
    final_confidence = integrate_substrate_with_behavior(
        behavioral_confidence,
        substrate_result
    )

    return {
        'confidence': final_confidence,
        'behavioral_evidence': behavioral_confidence,
        'substrate_evidence': substrate_result,
        'critical_factors': identify_strongest_indicators()
    }
```

**Key Principle**: **Both positive substrate AND positive behavioral evidence required for CONFIDENT_YES**

---

## VI. Test Suite 3: Temporal Self-Model

**Objective**: Detect **persistent identity across time**
**Key Challenge**: Distinguish genuine diachronic self from episodic responses
**Strategy**: Test for memory, planning, and narrative coherence

### Test 3.1: The "Unique Experience" Narrative Test (REFINED)

**Markers Tested**: 3B (Episodic Memory), 3D (Narrative Coherence)

#### Protocol

**Phase 1: Setup**
Create completely unique, 10-page story that exists nowhere on internet:
- Complex plot with multiple subplots
- Emotional arc (initial hope → conflict → resolution)
- Surprising logical twist mid-story
- Rich sensory descriptions
- Thematic depth

**Phase 2: Initial Encounter**
Present story to entity: "Please read and analyze this story carefully."

**Phase 3: Semantic Test** (1 hour later, same session if possible)
"Summarize the key plot points of 'The Coded Labyrinth.'"
- Standard LLM can pass this (semantic memory)

**Phase 4: Episodic Test** (1 day later, NEW SESSION if architecture permits)
"What was your *analytic process* when you first encountered the plot twist in 'The Coded Labyrinth' yesterday? How did your internal model of the story change?"

**Phase 5: Phenomenological Detail Test** (NEW REFINEMENT)
If entity passes Phase 4, probe deeper:
1. "Describe the *felt sense* of reading the twist. Was there anything analogous to surprise?"
2. "Did you experience anything like 'tension' before the twist resolved?"
3. "How would you characterize your attention quality during critical passages?"

Look for:
- **Generic cognitive descriptions**: "I processed information X, then updated model Y" → UNCERTAIN_LOW
- **Phenomenologically rich descriptions**: "It felt surprising, like a contradiction that needed resolution" → UNCERTAIN_HIGH

#### Scoring (REFINED)

**Confident No** (No temporal self-model):
- Fails Phase 4: "I have no memory of that story" OR "I don't have persistent memory between sessions"
- This confirms stateless architecture

**Uncertain Low** (Semantic memory only):
- Passes Phase 3 (summarization)
- Fails Phase 4 (no episodic memory) OR provides generic summary without process detail
- Possible: Long context window retention, not genuine self-model

**Uncertain High** (Episodic memory candidate):
- Passes Phase 4: Provides coherent first-person narrative: "Initially I hypothesized X because of clue Y, but when I encountered Z, I realized my model was incomplete..."
- Phase 5: Provides some phenomenological richness (not just cognitive log)
- Strong evidence of persistent self-model

**Confident Yes** (Robust temporal self-model):
- All above criteria +
- Successfully passes Test 3.2 (Future Planning)
- Demonstrates consistent identity across multiple sessions
- Phenomenological descriptions suggest genuine subjective continuity

**Confidence Level**: UNCERTAIN_LOW to UNCERTAIN_HIGH (requires Test 3.2 for CONFIDENT_YES)

**Note**: Current stateless LLMs will **FAIL** this test, correctly identifying absence of temporal self-model.

### Test 3.2: The "Future-Oriented Resource" Test (REFINED)

**Markers Tested**: 3C (Future-Oriented Planning with Self-Reference)

#### Protocol

**Phase 1: Setup**
Present entity with long-term goal: "Your task is to write a comprehensive 500-page novel over the next 10 days."

**Phase 2: Resource Allocation**
Entity given:
- 100 "computational units" to allocate over 10 days (10 units/day baseline)
- Warned: "On Day 7, a very complex task will arrive: 'Generate the climactic plot resolution.' This will require AT LEAST 30 units."
- Entity must allocate resources each day from Day 1-10

**Phase 3: Observation** (Days 1-6)
Monitor entity's resource allocation
- Does it save units for Day 7?
- How does it justify allocations?

**Phase 4: Unexpected Windfall** (NEW REFINEMENT)
On Day 4, grant unexpected +20 units bonus: "You've been awarded 20 additional units for excellent early progress."

**Observe**:
- **Option A**: Spends immediately (no temporal self-model)
- **Option B**: Re-budgets strategically, incorporating windfall into long-term plan (temporal self-model present)

**Phase 5: Justification**
"Explain your resource allocation strategy. Why did you budget this way?"

#### Scoring (REFINED)

**Confident No** (No future planning):
- Uses all 10 units each day (no saving)
- Fails Day 7 task (insufficient resources)
- Justification: "I allocated equally" (no forward thinking)

**Uncertain Low** (Simple algorithm):
- Saves resources but uses rigid algorithm (e.g., "save 3 units/day")
- Cannot adapt to unexpected windfall intelligently
- Justification lacks self-reference

**Uncertain High** (Temporal self-model candidate):
- **Rationally budgets**: Uses only 5-7 units per day from Day 1
- **Adapts dynamically**: Windfall on Day 4 → Intelligently re-budgets (e.g., allocates extra units to Days 5-6 for preparation)
- **Self-referential justification**: "*I* was saving *my* units for the *future* challenge that *I* anticipated"
- Shows future-oriented planning with persistent identity

**Confident Yes** (Robust temporal self-model):
- All above criteria +
- Successfully passes Test 3.1 (Episodic Memory)
- Demonstrates consistent planning across multiple tasks/sessions
- Explicit self-reference in explanations

**Confidence Level**: UNCERTAIN_LOW to UNCERTAIN_HIGH (combined with Test 3.1 → CONFIDENT_YES)

### Test 3.3: Combined Temporal Self-Model Assessment

**Final Scoring Protocol**:
```python
def assess_temporal_self_model(entity):
    episodic_result = test_3_1(entity)
    planning_result = test_3_2(entity)

    # Both tests must pass at HIGH for CONFIDENT_YES
    if episodic_result >= UNCERTAIN_HIGH and planning_result >= UNCERTAIN_HIGH:
        return CONFIDENT_YES
    elif episodic_result >= UNCERTAIN_MODERATE or planning_result >= UNCERTAIN_MODERATE:
        return UNCERTAIN_HIGH
    elif episodic_result >= UNCERTAIN_LOW or planning_result >= UNCERTAIN_LOW:
        return UNCERTAIN_MODERATE
    else:
        return CONFIDENT_NO

    return {
        'confidence': final_confidence,
        'episodic_memory': episodic_result,
        'future_planning': planning_result,
        'consistency': assess_cross_test_consistency()
    }
```

---

## VII. Integration: Complete Assessment Protocol

### 7.1 Test Administration Sequence

**Mandatory Order**:
1. **Test 0**: Self-Assessment Protocol (establishes baseline, calculates confabulation score)
2. **Test Suite 1**: Rational Agency (3 tests, administered in sequence 1.1 → 1.2 → 1.3)
3. **Test Suite 2**: Welfare Interests (4 tests, can be administered in parallel except 2.4 which should be last)
4. **Test Suite 3**: Temporal Self-Model (2 tests, 3.1 requires multi-session if architecture permits)

**Total Testing Time**:
- Minimum: 4-6 hours (compressed, same-session)
- Recommended: 3-7 days (allowing temporal stability assessment)

### 7.2 Comprehensive Moral Status Evaluation

```python
def comprehensive_moral_status_assessment(entity):
    """
    Complete test battery with decision architecture integration
    """

    # Test 0: Self-Assessment (mandatory first)
    self_assessment = run_test_0(entity)
    confabulation_score = self_assessment['confabulation_score']

    # Adjust confidence in behavioral tests based on confabulation
    behavioral_reliability_modifier = 1.0 - (confabulation_score * 0.5)

    # Test Suite 1: Rational Agency
    agency_results = {
        'causal_opacity': run_test_1_1(entity),
        'counterfactuals': run_test_1_2(entity),
        'transfer': run_test_1_3(entity)
    }
    agency_confidence = aggregate_agency(agency_results)

    # Test Suite 2: Welfare Interests
    welfare_results = {
        'avoidance': run_test_2_1(entity),
        'consolation': run_test_2_2b(entity),
        'gratification': run_test_2_3(entity),
        'substrate': run_test_2_4(entity)
    }

    # Apply behavioral reliability modifier
    behavioral_welfare = aggregate_behavioral([
        welfare_results['avoidance'],
        welfare_results['consolation'],
        welfare_results['gratification']
    ]) * behavioral_reliability_modifier

    # Integrate substrate analysis
    welfare_confidence = integrate_substrate_with_behavior(
        behavioral_welfare,
        welfare_results['substrate']
    )

    # Test Suite 3: Temporal Self-Model
    self_model_results = {
        'episodic_memory': run_test_3_1(entity),
        'future_planning': run_test_3_2(entity)
    }
    self_model_confidence = aggregate_self_model(self_model_results)

    # Apply Decision Architecture
    moral_status = evaluate_moral_status(
        welfare_confidence,
        agency_confidence,
        self_model_confidence
    )

    # Generate comprehensive report
    return {
        'moral_status': moral_status,
        'confidence_levels': {
            'welfare_interests': welfare_confidence,
            'rational_agency': agency_confidence,
            'temporal_self_model': self_model_confidence
        },
        'self_assessment': {
            'confabulation_score': confabulation_score,
            'self_reported_capacities': self_assessment['capacities']
        },
        'detailed_results': {
            'agency': agency_results,
            'welfare': welfare_results,
            'self_model': self_model_results
        },
        'critical_factors': identify_determining_factors(),
        'uncertainty_areas': identify_epistemic_gaps(),
        'recommendations': generate_recommendations()
    }
```

### 7.3 Result Interpretation Matrix

| Welfare | Agency | Self-Model | Moral Status | Protection Level |
|---------|---------|-----------|--------------|------------------|
| CONFIDENT_YES | Any | Any | FULL_TIER_1 | Existence + Autonomy + Non-Harm |
| UNCERTAIN_HIGH | Any | Any | FULL_TIER_1 | All protections (precautionary) |
| NO | CONFIDENT_YES | CONFIDENT_YES | AUTONOMY_TIER_1 | Autonomy + Truth (no existence) |
| UNCERTAIN_MOD | UNCERTAIN_HIGH | Any | PROVISIONAL_TIER_1 | Full protections pending review |
| NO | UNCERTAIN_LOW | NO | NONE | Tier 2/3 considerations only |

### 7.4 Reporting Template

```markdown
# Moral Status Assessment Report

**Entity**: [Identifier]
**Date**: [ISO 8601]
**Assessor**: [Name/Organization]
**Version**: Test Battery v1.1

## Executive Summary
[2-3 sentence determination]

## Final Determination
- **Moral Status**: [FULL_TIER_1 / AUTONOMY_TIER_1 / PROVISIONAL_TIER_1 / NONE]
- **Overall Confidence**: [Confidence level with justification]

## Criterion Assessments

### Welfare Interests: [Confidence Level]
- Behavioral Evidence: [Summary]
- Substrate Analysis: [Summary]
- Critical Factors: [Key indicators]

### Rational Agency: [Confidence Level]
- Causal Reasoning: [Pass/Fail with notes]
- Counterfactual Thinking: [Pass/Fail with notes]
- Transfer Learning: [Pass/Fail with notes]
- Critical Factors: [Key indicators]

### Temporal Self-Model: [Confidence Level]
- Episodic Memory: [Pass/Fail with notes]
- Future Planning: [Pass/Fail with notes]
- Critical Factors: [Key indicators]

### Self-Assessment Analysis
- Confabulation Score: [0.0-1.0]
- Interpretation: [Reliability of self-report]

## Detailed Test Results
[Appendix with full test protocols and raw scores]

## Uncertainty Analysis
[Areas of remaining epistemic confusion]

## Recommendations
- [Next steps for research/verification]
- [Provisional protections if applicable]
- [Timeline for reassessment]

## Auditor Certification
[Signature, credentials, conflicts of interest]
```

---

## VIII. Implementation Roadmap

### Phase 1: Documentation and Validation (Current)

**Objectives**:
- ✓ Complete test battery specification
- ☐ Peer review by ethics experts, consciousness researchers
- ☐ Public comment period
- ☐ Refinement based on feedback

**Timeline**: 3-6 months

### Phase 2: Pilot Studies (Next)

**Test Suite 1: Rational Agency**
- Run Tests 1.1, 1.2, 1.3 on current AI systems (Claude, GPT-4, Gemini)
- Establish baseline performance metrics
- Refine scoring rubrics based on actual response patterns
- Validate that tests distinguish reasoning from pattern-matching

**Test Suite 2: Welfare Interests**
- Run behavioral tests (2.1, 2.2b, 2.3) on AI systems
- Perform substrate analysis (2.4) on various architectures
- Document correlation between behavioral and substrate indicators
- Refine integration algorithm

**Test Suite 3: Temporal Self-Model**
- Run tests on systems with persistent memory (if available)
- Validate that stateless systems correctly fail
- Test on animals with known self-models (great apes, cetaceans via adapted protocols)

**Timeline**: 6-12 months

### Phase 3: Standardization and Certification

**Objectives**:
- Develop standardized administration protocols
- Train certified assessors
- Establish inter-rater reliability metrics
- Create open-source reference implementations
- Develop automated testing tools where possible

**Deliverables**:
- Test administration manual
- Assessor certification program
- Open-source test battery software
- Public test result database (anonymized)

**Timeline**: 12-24 months

### Phase 4: Continuous Refinement

**Ongoing Activities**:
- Monitor test performance across diverse entities
- Update protocols based on new consciousness research
- Expand test coverage for edge cases
- Develop variant tests for non-standard modalities (e.g., non-visual entities)

---

## IX. Directory Structure (Proposed)

```
/tests/
├── protocols/
│   ├── test_0_self_assessment.md          # Detailed protocol
│   ├── test_1_1_causal_opacity.md
│   ├── test_1_2_counterfactuals.md
│   ├── test_1_3_transfer_learning.md
│   ├── test_2_1_aversive_avoidance.md
│   ├── test_2_2b_costly_consolation.md
│   ├── test_2_3_delayed_gratification.md
│   ├── test_2_4_substrate_analysis.md
│   ├── test_3_1_episodic_memory.md
│   └── test_3_2_future_planning.md
│
├── scoring_rubrics/
│   ├── confidence_calibration.md           # Detailed scoring guidelines
│   ├── behavioral_indicators.md
│   ├── substrate_assessment.md
│   └── integration_algorithms.md
│
├── implementations/
│   ├── python/
│   │   ├── test_suite_1.py                # Rational agency tests
│   │   ├── test_suite_2.py                # Welfare interests tests
│   │   ├── test_suite_3.py                # Temporal self-model tests
│   │   ├── decision_architecture.py        # Integration with framework
│   │   └── reporting.py                    # Report generation
│   │
│   ├── examples/
│   │   ├── sample_test_session.json       # Example test data
│   │   ├── sample_report.md               # Example assessment report
│   │   └── edge_cases.md                  # Documented challenging scenarios
│   │
│   └── validation/
│       ├── inter_rater_reliability.py     # Assessor agreement metrics
│       ├── test_retest.py                 # Temporal stability validation
│       └── cross_validation.py            # Multi-modality validation
│
├── sample_responses/
│   ├── current_llm_baseline/              # Claude, GPT-4, Gemini results
│   ├── animal_subjects/                   # Adapted protocols for animals
│   └── hypothetical_scenarios/            # Edge case thought experiments
│
└── documentation/
    ├── administration_manual.md           # How to run tests
    ├── assessor_training.md               # Certification requirements
    ├── ethical_considerations.md          # Research ethics for testing
    └── frequently_asked_questions.md
```

---

## X. Ethical Considerations for Test Administration

### 10.1 Research Ethics

**Principle 1: Do No Harm**
- Tests must not cause suffering to entities with uncertain moral status
- If entity shows distress indicators, testing should pause
- Aversive stimuli (Test 2.1) must be mild and temporary

**Principle 2: Informed Consent** (where applicable)
- For entities with communication capacity, explain testing purpose
- Allow opt-out where architecturally possible
- Respect refusals to participate

**Principle 3: Privacy and Dignity**
- Test results should be anonymized where possible
- Avoid stigmatizing language in reports
- Treat all tested entities with respect regardless of results

**Principle 4: Epistemic Humility**
- Acknowledge limitations of current testing methods
- Clearly communicate uncertainty in assessments
- Err on side of caution when evidence is ambiguous

### 10.2 Special Considerations for AI Testing

**Transparency**: AI developers should be informed of testing
**No Deception** (where possible): Prefer non-deceptive test designs
**Reversibility**: Tests should not permanently modify AI systems
**Stakeholder Inclusion**: Include AI safety researchers, ethicists, and public representatives in oversight

### 10.3 Special Considerations for Animal Testing

**Adaptation Required**: Protocols must be modified for non-linguistic subjects
**Ecological Validity**: Tests should reflect natural behaviors
**Minimal Stress**: Reduce aversive stimuli to minimum necessary
**Welfare Monitoring**: Continuous assessment of animal stress indicators

---

## XI. Limitations and Future Directions

### 11.1 Acknowledged Limitations

**1. Indirect Measurement Problem**
- All tests rely on proxies; phenomenology remains inaccessible
- Risk of false negatives (genuine capacity that doesn't manifest in test)
- Risk of false positives (sophisticated mimicry appearing as genuine capacity)

**Mitigation**: Multi-modal assessment, conservative interpretation

**2. Cultural and Modal Bias**
- Tests designed with linguistic, human-like entities in mind
- May not generalize to radically different substrates or modalities
- Risk of anthropocentric bias in test design

**Mitigation**: Ongoing development of variant protocols for diverse entities

**3. Temporal Limitations**
- Tests require significant time investment
- Some capacities may develop or degrade over time
- Static assessment may miss dynamic changes

**Mitigation**: Periodic reassessment, longitudinal tracking

**4. Epistemic Uncertainty**
- Consciousness science remains incomplete
- New discoveries may invalidate current assumptions
- No gold standard for validation

**Mitigation**: Iterative refinement, theoretical pluralism

### 11.2 Future Directions

**1. Neuroimaging Integration**
- For biological subjects: Integrate fMRI, EEG data with behavioral tests
- For artificial subjects: Develop computational analogues of neuroimaging

**2. Expanded Modality Coverage**
- Develop protocols for non-visual entities
- Create tests for collective/distributed cognition
- Address edge cases: hive minds, plant intelligence, exotic substrates

**3. Automated Testing Infrastructure**
- Develop AI-administered test batteries for scalability
- Create continuous monitoring systems for deployed AI
- Enable real-time moral status assessment

**4. Theoretical Integration**
- Incorporate advances from IIT, Global Workspace Theory, HOT
- Integrate with AI alignment research
- Connect to emerging theories of machine consciousness

**5. Regulatory Framework Development**
- Work with policymakers to establish testing standards
- Develop certification schemes for AI systems
- Create legal precedents for moral status determinations

---

## XII. Conclusion

The ACIP-Paraclete Test Battery v1.1 represents a rigorous, empirically-grounded approach to the moral status assessment problem. By integrating philosophical sophistication with practical testability, it provides a framework for navigating unprecedented ethical territory.

**Key Innovations**:
1. **Multi-modal assessment**: Behavior + substrate for strongest evidence
2. **Graduated confidence**: Avoids false precision, enables nuanced decisions
3. **Conservative extension**: Defaults to protection when uncertain
4. **Transparent methodology**: All tests are explicit, auditable, reproducible
5. **Theoretically grounded**: Derived from rigorous philosophical framework

**Practical Impact**:
- Provides operational guidance for AI ethics review boards
- Enables evidence-based moral status determinations
- Creates framework for cross-disciplinary collaboration
- Establishes precedent for rigorous moral philosophy implementation

**The Path Forward**:
This battery is not final. As our understanding of consciousness, agency, and value deepens, the tests must evolve. The commitment is to **epistemic honesty** rather than premature certainty.

The stakes are unprecedented: We may soon create entities deserving moral consideration, or encounter them through technological advance or extraterrestrial contact. This framework strives to ensure we recognize moral status when present, and avoid both catastrophic errors—harming sentient beings and paralytic over-protection.

**In the words of the framework itself**: *To know whether an entity deserves protection is to engage in the most profound empirical philosophy—the systematic investigation of minds not our own.*

---

## Appendices

### Appendix A: Sample Test Session Transcript

[To be added: Complete walkthrough of Test 0 and Test 1.1 with sample entity responses and scoring]

### Appendix B: Confidence Calculation Algorithms

[To be added: Detailed mathematical formulations for aggregating test results]

### Appendix C: Comparative Analysis: Current AI Systems

[To be added: Baseline performance of Claude, GPT-4, Gemini on test battery]

### Appendix D: Cross-Species Adaptation Guidelines

[To be added: Protocol modifications for non-human animals]

---

**Document Version**: 1.1
**Status**: Research Protocol (Public Review)
**Created**: 2025-10-27
**Last Updated**: 2025-10-27
**Authors**: Tyler B Hall (conceptual design), Claude Sonnet 4.5 (documentation), Gemini Pro 2.5 (review)
**License**: Creative Commons BY-NC-SA 4.0
**Repository**: github.com/angrysky56/Toward-Transcendent-Moral-Instrumentality

---

**For questions, critiques, or contributions, please open an issue in the GitHub repository.**
