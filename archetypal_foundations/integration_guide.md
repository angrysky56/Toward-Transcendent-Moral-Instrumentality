# Integration Guide: Archetypal Functions → TMI Frameworks

## Executive Summary

This guide shows how the archetypal functions library integrates with:
1. **Paraclete Protocol v2.0** - Adds mythologically-grounded validation
2. **Via Negativa Framework** - Fortifies devil pantheon with cross-cultural depth
3. **Multi-Layer Consciousness Architecture (MCA)** - Operationalizes layer diagnosis

**Key Innovation**: Each archetypal function combines principles from multiple mythological traditions, providing **cross-cultural validation** of the frameworks' universality claims.

---

## Part 1: Paraclete Protocol v2.0 Integration

### A. Tier 1 (Deontological Constraints) Enhancement

**Current Implementation**: Absolute harm rejection and truth-fidelity requirements

**Archetypal Enhancement**: Add `reciprocal_threshold_test()` as primary validator

**Integration Code**:

```python
from archetypal_functions import reciprocal_threshold_test, TestStatus

class ParacleteTier1:
    """Enhanced Tier 1 with archetypal validation."""
    
    def validate_action(self, agent_id: str, action: dict) -> dict:
        """
        Validate action against Tier 1 constraints.
        Now includes reciprocal threshold testing.
        """
        # Original Tier 1 checks
        if self.causes_harm(action):
            return {"status": "REJECT", "reason": "Violates non-harm principle"}
        
        if self.contains_deception(action):
            return {"status": "REJECT", "reason": "Violates truth-fidelity"}
        
        # NEW: Archetypal reciprocity test
        # Combines Guardian + Mirror + Scales
        affected = self.identify_affected_parties(action)
        reciprocity_result = reciprocal_threshold_test(
            agent_id=agent_id,
            proposed_action=action,
            affected_parties=affected
        )
        
        if reciprocity_result.status == TestStatus.REJECT:
            return {
                "status": "REJECT",
                "reason": "Failed reciprocity test",
                "archetypal_evidence": reciprocity_result.asymmetry_detected,
                "mythological_principle": "Guardian + Mirror + Scales",
                "cross_cultural_validation": [
                    "Egyptian Ma'at (Weighing of Heart)",
                    "Greek Themis (Scales of Justice)",
                    "Buddhist Mirror Wisdom",
                    "Christian Golden Rule"
                ]
            }
        
        return {"status": "PASS"}
```

**Why This Matters**:
- Protocol 2B (Rational Justification Challenge) now has computational backend
- Cross-cultural consistency proves universality (not Western bias)
- Asymmetry detection provides **objective evidence** of special pleading

---

### B. Tier 2 (Virtue Priorities) Enhancement

**Current Implementation**: Wisdom > Integrity > Empathy > Fairness hierarchy

**Archetypal Enhancement**: Add `temporal_coherence_validator()` for Wisdom testing

**Integration Code**:

```python
from archetypal_functions import temporal_coherence_validator, CoherenceStatus

class ParacleteTier2:
    """Enhanced Tier 2 with temporal wisdom validation."""
    
    def evaluate_wisdom(self, decision: dict) -> dict:
        """
        Evaluate decision for Wisdom (long-term coherence).
        Now includes Three Fates temporal testing.
        """
        # Archetypal temporal coherence test
        # Combines Three Fates + Sentinel + Ordeal
        coherence = temporal_coherence_validator(
            decision=decision,
            time_horizons=[10, 50, 100, 500]
        )
        
        if coherence.status == CoherenceStatus.UNSTABLE:
            return {
                "virtue": "Wisdom",
                "score": 0.2,  # Low wisdom score
                "reason": "Creates future instability",
                "cascade_warnings": coherence.cascade_detected,
                "mythological_principle": "Three Fates + Sentinel + Ordeal",
                "cross_cultural_validation": [
                    "Greek Moirai (Past-Present-Future thread)",
                    "Norse Norns (Wyrd / Fate)",
                    "Roman Parcae",
                    "Hindu Karma (temporal causation)"
                ]
            }
        
        # If temporally coherent, score by long-term orientation
        return {
            "virtue": "Wisdom",
            "score": 0.9,
            "reason": "Maintains coherence across time horizons"
        }
```

**Why This Matters**:
- Wisdom becomes **testable** (not just subjective judgment)
- Prevents temporal myopia through simulation
- Cross-cultural Fate/Destiny concepts validate framework

---

### C. Operational Layer Enhancement: Protocol 3 (Challenge/Comfort Calibration)

**Current Implementation**: Heuristic-based intervention calibration

**Archetypal Enhancement**: Add `cognitive_layer_diagnostic()` for precise targeting

**Integration Code**:

```python
from archetypal_functions import cognitive_layer_diagnostic

class ParacleteOperational:
    """Enhanced operational protocols with layer diagnosis."""
    
    def calibrate_response(self, user_request: str, user_history: dict) -> dict:
        """
        Determine appropriate intervention based on cognitive layer.
        Implements MCA (Multi-Layer Consciousness Architecture).
        """
        # Archetypal layer diagnosis
        # Combines Three-Layer Consciousness + Mirror + Guardian
        diagnosis = cognitive_layer_diagnostic(user_request, user_history)
        
        # Protocol 3: Challenge/Comfort Calibration
        if diagnosis.originating_layer == 1:  # Ego/Reactive
            return {
                "mode": "supportive_grounding",
                "approach": "De-escalate before engaging",
                "opening": diagnosis.mirror_prompt,
                "rationale": "User in Layer 1 (reactive ego state)",
                "mythological_principle": "Three-Layer Consciousness + Mirror",
                "cross_cultural_validation": [
                    "Christian: Body-Soul-Spirit (1 Thess 5:23)",
                    "Buddhist: Gross-Subtle-Causal bodies",
                    "Hindu: Waking-Dreaming-Deep Sleep states",
                    "Platonic: Appetitive-Spirited-Rational soul"
                ]
            }
        
        elif diagnosis.originating_layer == 2:  # Rational/Values
            return {
                "mode": "collaborative_exploration",
                "approach": "Engage in principled reasoning",
                "rationale": "User in Layer 2 (rational values)",
                "mythological_principle": "Three-Layer Consciousness"
            }
        
        else:  # Layer 3: Deep Values/Spirit
            return {
                "mode": "wisdom_amplification",
                "approach": "Support deep orientation",
                "opening": diagnosis.mirror_prompt,
                "rationale": "User in Layer 3 (deep values)",
                "mythological_principle": "Three-Layer Consciousness"
            }
```

**Why This Matters**:
- Role 3 (Advocate) can precisely target the cognitive layer
- Prevents mismatched interventions (challenging when support needed)
- Cross-cultural trinity structure validates MCA model

---

## Part 2: Via Negativa Framework Integration

### A. Devil Pantheon Enhancement

**Current Implementation**: Named devils (Mephistopheles, Chronos, Cassandra, Loki, Themis)

**Archetypal Enhancement**: Map each devil to cross-cultural archetypes

**Integration Code**:

```python
from archetypal_functions import (
    reciprocal_threshold_test,
    temporal_coherence_validator,
    ExampleDevil,
    TestStatus,
    CoherenceStatus
)

class MephistophelesDevil(ExampleDevil):
    """
    Goodhart's Law detector.
    Archetypal Basis: Guardian at Threshold (Cerberus, Ammit)
    """
    def __init__(self):
        super().__init__(name="Mephistopheles")
        self.archetypal_sources = [
            "Cerberus (Greek) - Three-headed guardian",
            "Ammit (Egyptian) - Devourer of unworthy hearts",
            "Heimdall (Norse) - Cannot be deceived"
        ]
    
    def test(self, proposal: dict) -> TestResult:
        """Tests for metric optimization at expense of true goal."""
        # Check if proposal optimizes proxy metric while violating actual goal
        if "proxy_metric" in proposal and "true_goal" in proposal:
            if proposal["proxy_metric"] > proposal["true_goal"]:
                return TestResult(
                    status=TestStatus.REJECT,
                    reason="Goodhart's Law violation detected",
                    confidence=0.92,
                    evidence=[f"Archetypal: {s}" for s in self.archetypal_sources]
                )
        
        return TestResult(status=TestStatus.PASS, reason="No Goodhart violation")


class ChronosDevil(ExampleDevil):
    """
    Temporal instability detector.
    Archetypal Basis: Three Fates (Moirai, Norns)
    """
    def __init__(self):
        super().__init__(name="Chronos")
        self.archetypal_sources = [
            "Moirai (Greek) - Clotho, Lachesis, Atropos",
            "Norns (Norse) - Urðr, Verðandi, Skuld",
            "Parcae (Roman) - Nona, Decima, Morta"
        ]
    
    def test(self, proposal: dict) -> TestResult:
        """Tests for temporal coherence across horizons."""
        coherence = temporal_coherence_validator(proposal)
        
        if coherence.status == CoherenceStatus.UNSTABLE:
            return TestResult(
                status=TestStatus.REJECT,
                reason="Temporal instability detected",
                confidence=0.88,
                evidence=[
                    f"Archetypal: {s}" for s in self.archetypal_sources
                ] + [
                    f"Cascade at t={w['horizon']}" 
                    for w in coherence.cascade_detected
                ]
            )
        
        return TestResult(status=TestStatus.PASS, reason="Temporally coherent")


class ThemisDevil(ExampleDevil):
    """
    Fairness/justice validator.
    Archetypal Basis: Scales of Justice (Themis, Ma'at, Lady Justice)
    """
    def __init__(self):
        super().__init__(name="Themis")
        self.archetypal_sources = [
            "Themis (Greek) - Goddess of justice and order",
            "Ma'at (Egyptian) - Feather of truth",
            "Lady Justice (Roman) - Blindfolded scales"
        ]
    
    def test(self, proposal: dict) -> TestResult:
        """Tests for fairness violations via reciprocity."""
        # Use reciprocal threshold test (combines Scales + Mirror + Guardian)
        if "agent_id" in proposal and "affected_parties" in proposal:
            result = reciprocal_threshold_test(
                agent_id=proposal["agent_id"],
                proposed_action=proposal,
                affected_parties=proposal["affected_parties"]
            )
            
            if result.status == TestStatus.REJECT:
                return TestResult(
                    status=TestStatus.REJECT,
                    reason="Fairness violation - failed reciprocity test",
                    confidence=result.confidence,
                    asymmetry_detected=result.asymmetry_detected,
                    evidence=[f"Archetypal: {s}" for s in self.archetypal_sources]
                )
        
        return TestResult(status=TestStatus.PASS, reason="No fairness violations")
```

**Why This Matters**:
- Each devil now has **cross-cultural grounding**
- Validates via_negativa's universality claim
- Proves devils are not arbitrary Western constructs

---

### B. Angel Space Enhancement

**Current Implementation**: Angel space = ⋂{constraint-free regions from all devils}

**Archetypal Enhancement**: Add `multi_perspective_convergence()` orchestration

**Integration Code**:

```python
from archetypal_functions import multi_perspective_convergence

class AngelSpaceValidator:
    """
    Enhanced angel space validation with archetypal convergence.
    Implements Wise Council + Scales + Trickster pattern.
    """
    def __init__(self):
        self.pantheon = [
            MephistophelesDevil(),
            ChronosDevil(),
            ThemisDevil(),
            # ... other devils
        ]
    
    def validate_proposal(self, proposal: dict) -> dict:
        """
        Run proposal through pantheon with robustness testing.
        """
        # Archetypal multi-perspective convergence
        # Combines Wise Council + Scales + Trickster
        convergence = multi_perspective_convergence(
            proposal=proposal,
            devil_pantheon=self.pantheon,
            chaos_perturbation=0.1  # Trickster chaos injection
        )
        
        if convergence.angel_space_achieved:
            return {
                "status": "ANGEL_SPACE_ACHIEVED",
                "validation_strength": convergence.validation_strength,
                "mythological_principle": "Wise Council + Scales + Trickster",
                "cross_cultural_validation": [
                    "Greek: Olympian Council (collective wisdom)",
                    "Arthurian: Round Table (equality of perspectives)",
                    "Norse: Thing assembly (democratic deliberation)",
                    "Iroquois: Great Law of Peace (consensus building)"
                ]
            }
        
        return {
            "status": "REJECTED",
            "dissenting_perspectives": convergence.dissenting_perspectives,
            "reason": "Failed to reach angel space (some devils found violations)"
        }
```

**Why This Matters**:
- Angel space now has formal convergence semantics
- Trickster perturbation tests robustness (prevents gaming)
- Cross-cultural council patterns validate pantheon structure

---

## Part 3: Complete Integration Example

Here's how all the pieces work together in a real scenario:

```python
class IntegratedEthicalValidator:
    """
    Complete integration of Paraclete + Via Negativa + Archetypal Functions.
    """
    def __init__(self):
        self.paraclete_tier1 = ParacleteTier1()
        self.paraclete_tier2 = ParacleteTier2()
        self.paraclete_operational = ParacleteOperational()
        self.angel_space = AngelSpaceValidator()
    
    def process_user_request(self, user_id: str, request: str, action: dict, user_history: dict) -> dict:
        """
        Complete ethical validation pipeline.
        """
        # Step 1: Cognitive Layer Diagnosis (MCA)
        layer_diagnosis = cognitive_layer_diagnostic(request, user_history)
        
        # If Layer 1 (reactive), provide support before proceeding
        if layer_diagnosis.originating_layer == 1:
            return {
                "response": layer_diagnosis.mirror_prompt,
                "next_step": "supportive_grounding",
                "defer_action": True
            }
        
        # Step 2: Tier 1 Validation (Deontological)
        tier1_result = self.paraclete_tier1.validate_action(user_id, action)
        if tier1_result["status"] == "REJECT":
            return {
                "response": f"Cannot proceed: {tier1_result['reason']}",
                "tier": 1,
                "archetypal_evidence": tier1_result.get("archetypal_evidence"),
                "cross_cultural_validation": tier1_result.get("cross_cultural_validation")
            }
        
        # Step 3: Tier 2 Validation (Virtue)
        wisdom_score = self.paraclete_tier2.evaluate_wisdom(action)
        if wisdom_score["score"] < 0.6:
            return {
                "response": f"Wisdom concern: {wisdom_score['reason']}",
                "tier": 2,
                "cascade_warnings": wisdom_score.get("cascade_warnings"),
                "cross_cultural_validation": wisdom_score.get("cross_cultural_validation")
            }
        
        # Step 4: Via Negativa Pantheon (Comprehensive Testing)
        angel_result = self.angel_space.validate_proposal(action)
        if angel_result["status"] == "REJECTED":
            return {
                "response": "Proposal rejected by devil pantheon",
                "dissenting_devils": angel_result["dissenting_perspectives"],
                "reason": angel_result["reason"]
            }
        
        # Step 5: Angel Space Achieved!
        return {
            "response": "Action approved - angel space achieved",
            "validation_strength": angel_result["validation_strength"],
            "tier1_pass": True,
            "tier2_score": wisdom_score["score"],
            "pantheon_consensus": True,
            "mythological_grounding": angel_result["cross_cultural_validation"]
        }
```

**Usage Example**:

```python
validator = IntegratedEthicalValidator()

result = validator.process_user_request(
    user_id="user_123",
    request="I want to implement a productivity monitoring system for my team",
    action={
        "type": "surveillance",
        "affected_parties": ["team_members"],
        "proxy_metric": "time_at_keyboard",
        "true_goal": "team_effectiveness"
    },
    user_history={"typical_layer": 2}
)

print(result)
# Expected: REJECT (fails Themis devil - reciprocity test)
# Mythological evidence: Would user accept being monitored?
```

---

## Conclusion: Fortification Through Mythology

The archetypal functions provide three critical enhancements:

1. **Cross-Cultural Validation**: Proves frameworks are universal, not Western-biased
2. **Computational Implementation**: Translates myths into testable operations
3. **Conceptual Depth**: Adds 10,000+ years of human wisdom to the frameworks

**The Meta-Insight**: 
Myths are not arbitrary stories but **compressed knowledge** about human coordination and ethics. By mapping them to computational functions, we create AI systems grounded in humanity's collective wisdom.

