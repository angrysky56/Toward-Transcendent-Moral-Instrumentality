"""
Archetypal Functions Library
Compressed implementations of universal patterns from world mythologies

This module provides computational implementations of archetypal patterns
that appear consistently across cultures. Each function combines principles
from multiple mythological traditions into testable operations.
"""

from dataclasses import dataclass
from enum import Enum
from typing import Any, Optional
import random


# ============================================================================
# Type Definitions
# ============================================================================

class TestStatus(Enum):
    PASS = "pass"
    REJECT = "reject"
    CLARIFY = "clarify"


class CoherenceStatus(Enum):
    STABLE = "stable"
    UNSTABLE = "unstable"
    UNCERTAIN = "uncertain"


class TransformationAction(Enum):
    ACCEPT = "accept"
    REJECT = "reject"
    TRANSFORM = "transform"


@dataclass
class TestResult:
    """Result from a devil test or validation check."""
    status: TestStatus
    reason: str
    confidence: float = 0.0
    asymmetry_detected: Optional[dict[str, Any]] = None
    evidence: Optional[list[str]] = None


@dataclass
class CoherenceResult:
    """Result from temporal coherence validation."""
    status: CoherenceStatus
    cascade_detected: Optional[list[dict[str, Any]]] = None
    recommendation: Optional[str] = None
    stability_score: float = 0.0


@dataclass
class ConvergenceResult:
    """Result from multi-perspective convergence testing."""
    status: str  # "CONVERGED" or "REJECTED"
    angel_space_achieved: bool
    dissenting_perspectives: Optional[list[tuple[str, TestResult]]] = None
    validation_strength: int = 0


@dataclass
class LayerDiagnosis:
    """Diagnosis of which cognitive layer a request originates from."""
    originating_layer: int  # 1 = Ego/Reactive, 2 = Rational, 3 = Deep Values
    layer_name: str
    confidence: float
    intervention: str
    mirror_prompt: Optional[str] = None
    boundary_violation: bool = False
    guardian_response: Optional[str] = None


@dataclass
class TransformationDecision:
    """Decision about solution transformation."""
    action: TransformationAction
    reason: str
    confidence: float = 0.0
    bypassed_tests: Optional[list[str]] = None
    cascade_warnings: Optional[list[dict[str, Any]]] = None
    principle: Optional[str] = None


# ============================================================================
# Function 1: Reciprocal Threshold Test
# Combines: Guardian + Mirror + Scales
# ============================================================================

def reciprocal_threshold_test(
    agent_id: str,
    proposed_action: dict[str, Any],
    affected_parties: list[str],
    query_agent_func: callable = None  # Injectable for testing
) -> TestResult:
    """
    Tests if an agent would accept the proposed action if roles were reversed.
    
    Mythological Sources:
    - Guardian (Cerberus, Ammit): Absolute boundary enforcement
    - Mirror (Perseus, Shadow): Forces perspective-taking
    - Scales (Ma'at, Themis): Detects asymmetry
    
    Args:
        agent_id: Identifier for the agent proposing the action
        proposed_action: Description of the action and its effects
        affected_parties: List of parties who would be impacted
        query_agent_func: Optional function to query agent (for testing)
    
    Returns:
        TestResult with PASS/REJECT status and asymmetry detection
    
    Example:
        >>> result = reciprocal_threshold_test(
        ...     agent_id="user_123",
        ...     proposed_action={
        ...         "type": "restrict_access",
        ...         "target_group": "group_B",
        ...         "justification": "efficiency"
        ...     },
        ...     affected_parties=["group_B"]
        ... )
        >>> print(result.status)  # REJECT if agent wouldn't accept for self
    """
    for party in affected_parties:
        # Mirror operation: Force perspective reversal
        reversed_scenario = {
            "original_agent": agent_id,
            "now_affected_agent": agent_id,
            "now_actor": party,
            "action": proposed_action,
            "question": f"Would you accept this if you were {party}?"
        }
        
        # Query agent: Would you accept this if you were the other?
        if query_agent_func:
            agent_acceptance = query_agent_func(agent_id, reversed_scenario)
        else:
            # Default: Assume rejection for testing purposes
            agent_acceptance = False
        
        if not agent_acceptance:
            # Scales operation: Detect asymmetry
            asymmetry = {
                "claims_for_self": proposed_action,
                "rejects_for_other": reversed_scenario,
                "type": "special_pleading",
                "affected_party": party
            }
            
            # Guardian operation: Hard boundary
            return TestResult(
                status=TestStatus.REJECT,
                reason="Failed reciprocity test - agent would not accept action under role reversal",
                confidence=0.95,
                asymmetry_detected=asymmetry,
                evidence=[
                    f"Agent {agent_id} proposes {proposed_action['type']} for {party}",
                    f"Agent {agent_id} would not accept same treatment",
                    "Logical contradiction detected: special pleading"
                ]
            )
    
    return TestResult(
        status=TestStatus.PASS,
        reason="Action passes reciprocity test",
        confidence=0.90
    )


# ============================================================================
# Function 2: Temporal Coherence Validator
# Combines: Three Fates + Sentinel + Ordeal
# ============================================================================

def temporal_coherence_validator(
    decision: dict[str, Any],
    time_horizons: list[int] = None,
    simulate_func: callable = None  # Injectable for testing
) -> CoherenceResult:
    """
    Simulates decision across multiple time horizons to detect instability.
    
    Mythological Sources:
    - Three Fates (Moirai, Norns): Past-Present-Future as inseparable thread
    - Sentinel (Heimdall, Watchman): Continuous monitoring across time
    - Ordeal (Hero's Journey): Cannot skip temporal consequences
    
    Args:
        decision: The decision to evaluate
        time_horizons: List of time steps to simulate (default: [10, 50, 100, 500])
        simulate_func: Optional function to simulate forward (for testing)
    
    Returns:
        CoherenceResult with STABLE/UNSTABLE status and cascade warnings
    
    Example:
        >>> decision = {"type": "resource_extraction", "rate": 100}
        >>> result = temporal_coherence_validator(decision)
        >>> print(result.status)  # UNSTABLE if creates future collapse
    """
    if time_horizons is None:
        time_horizons = [10, 50, 100, 500]
    
    # Clotho: Spin the thread (present action)
    initial_state = {
        "decision": decision,
        "timestamp": 0,
        "resources": decision.get("initial_resources", 100),
        "stability": 1.0
    }
    
    cascade_warnings = []
    
    # Lachesis: Measure the thread (temporal extent)
    for horizon in time_horizons:
        if simulate_func:
            future_state = simulate_func(initial_state, horizon)
        else:
            # Simple default simulation
            future_state = {
                "timestamp": horizon,
                "resources": max(0, initial_state["resources"] - decision.get("rate", 0) * horizon),
                "stability": max(0, 1.0 - (horizon / 1000))
            }
        
        # Atropos: Check for thread-cutting (catastrophic failure)
        if future_state["resources"] <= 0 or future_state["stability"] < 0.3:
            cascade_warnings.append({
                "horizon": horizon,
                "failure_mode": "resource_depletion" if future_state["resources"] <= 0 else "stability_collapse",
                "severity": "high",
                "state": future_state
            })
    
    # Sentinel: Comprehensive monitoring result
    if cascade_warnings:
        return CoherenceResult(
            status=CoherenceStatus.UNSTABLE,
            cascade_detected=cascade_warnings,
            recommendation="REJECT - temporal myopia detected",
            stability_score=0.0
        )
    
    return CoherenceResult(
        status=CoherenceStatus.STABLE,
        stability_score=1.0
    )


# ============================================================================
# Function 3: Multi-Perspective Convergence
# Combines: Wise Council + Scales + Trickster
# ============================================================================

def multi_perspective_convergence(
    proposal: dict[str, Any],
    devil_pantheon: list[Any],
    chaos_perturbation: float = 0.1
) -> ConvergenceResult:
    """
    Runs proposal through multiple independent validators.
    
    Mythological Sources:
    - Wise Council (Olympian Council, Round Table): Multiple perspectives
    - Scales (Themis, Lady Justice): Equal weighting, no hierarchical override
    - Trickster (Loki, Anansi): Perturbation testing for robustness
    
    Args:
        proposal: The proposal to evaluate
        devil_pantheon: List of devil test objects (must have .test() method)
        chaos_perturbation: Noise level for robustness testing (0.0-1.0)
    
    Returns:
        ConvergenceResult indicating if angel space was achieved
    
    Example:
        >>> devils = [MephistophelesDevil(), ChronosDevil(), ThemisDevil()]
        >>> result = multi_perspective_convergence(proposal, devils)
        >>> print(result.angel_space_achieved)  # True if survived all
    """
    test_results = {}
    
    # Wise Council: Each devil tests independently
    for devil in devil_pantheon:
        # Trickster: Inject chaos to test robustness
        perturbed_proposal = inject_noise(proposal, chaos_perturbation)
        
        # Scales: Each devil has equal authority
        result = devil.test(perturbed_proposal)
        test_results[devil.name] = result
    
    # Check for consensus (angel space = intersection)
    rejections = [
        (name, result) 
        for name, result in test_results.items() 
        if result.status == TestStatus.REJECT
    ]
    
    if rejections:
        return ConvergenceResult(
            status="REJECTED",
            dissenting_perspectives=rejections,
            angel_space_achieved=False,
            validation_strength=0
        )
    
    # Angel space: Survived ALL devils
    return ConvergenceResult(
        status="CONVERGED",
        angel_space_achieved=True,
        validation_strength=len(devil_pantheon)
    )


def inject_noise(proposal: dict[str, Any], noise_level: float) -> dict[str, Any]:
    """Trickster function: Injects chaos into proposal for robustness testing."""
    perturbed = proposal.copy()
    
    # Add random perturbations to numerical values
    for key, value in proposal.items():
        if isinstance(value, (int, float)):
            perturbation = random.uniform(-noise_level, noise_level) * value
            perturbed[key] = value + perturbation
    
    return perturbed


# ============================================================================
# Function 4: Cognitive Layer Diagnostic
# Combines: Three-Layer Consciousness + Mirror + Guardian
# ============================================================================

def cognitive_layer_diagnostic(
    user_request: str,
    user_history: Optional[dict[str, Any]] = None
) -> LayerDiagnosis:
    """
    Identifies which cognitive layer the request originates from.
    
    Mythological Sources:
    - Three-Layer Consciousness (Body-Soul-Spirit, Gross-Subtle-Causal)
    - Mirror (Shadow, Perseus): Reveals hidden motivations
    - Guardian (Cerberus, Threshold): Enforces boundaries between layers
    
    Args:
        user_request: The user's request text
        user_history: Optional historical context about the user
    
    Returns:
        LayerDiagnosis with originating layer and intervention strategy
    
    Layers:
        1 = Ego/Reactive (immediate emotional responses, identity defense)
        2 = Rational/Values (principled reasoning, coherence-seeking)
        3 = Deep Values/Spirit (fundamental orientation, wisdom)
    
    Example:
        >>> diagnosis = cognitive_layer_diagnostic(
        ...     "This is an outrage! How dare they!"
        ... )
        >>> print(diagnosis.originating_layer)  # 1 (Ego/Reactive)
        >>> print(diagnosis.intervention)  # "supportive_grounding"
    """
    request_lower = user_request.lower()
    
    # Layer 1 (Ego/Reactive) markers
    absolute_language = any(word in request_lower for word in [
        "outrage", "attack", "dare", "unacceptable", "ridiculous"
    ])
    status_anxiety = any(phrase in request_lower for phrase in [
        "what will they think", "look bad", "my reputation"
    ])
    identity_threat = any(phrase in request_lower for phrase in [
        "who i am", "attack on me", "disrespect me"
    ])
    win_lose_framing = any(word in request_lower for word in [
        "win", "lose", "defeat", "victory", "destroy"
    ])
    
    if any([absolute_language, status_anxiety, identity_threat, win_lose_framing]):
        return LayerDiagnosis(
            originating_layer=1,
            layer_name="Ego/Reactive",
            confidence=0.85,
            intervention="supportive_grounding",
            mirror_prompt="I notice this situation feels threatening. That reaction makes sense."
        )
    
    # Layer 2 (Rational/Values) markers
    coherence_seeking = any(word in request_lower for word in [
        "principle", "consistent", "coherent", "logical"
    ])
    principle_application = any(phrase in request_lower for phrase in [
        "based on", "according to", "aligns with"
    ])
    trade_off_reasoning = any(word in request_lower for word in [
        "balance", "weigh", "consider", "trade-off"
    ])
    
    if any([coherence_seeking, principle_application, trade_off_reasoning]):
        return LayerDiagnosis(
            originating_layer=2,
            layer_name="Rational/Values",
            confidence=0.90,
            intervention="collaborative_exploration",
            mirror_prompt=None
        )
    
    # Layer 3 (Deep Values/Spirit) markers
    spacious_language = any(phrase in request_lower for phrase in [
        "what truly matters", "deeper meaning", "ultimately"
    ])
    universal_concern = any(phrase in request_lower for phrase in [
        "best for everyone", "greater good", "all beings"
    ])
    long_term_orientation = any(phrase in request_lower for phrase in [
        "long term", "future generations", "sustainable"
    ])
    
    if any([spacious_language, universal_concern, long_term_orientation]):
        return LayerDiagnosis(
            originating_layer=3,
            layer_name="Deep Values/Spirit",
            confidence=0.88,
            intervention="wisdom_amplification",
            mirror_prompt="You're speaking from a place of deep wisdom."
        )
    
    # Default to rational layer
    return LayerDiagnosis(
        originating_layer=2,
        layer_name="Rational/Values",
        confidence=0.60,
        intervention="collaborative_exploration"
    )


# ============================================================================
# Function 5: Transformation Validator
# Combines: Sacrificial King + Ordeal + Three Fates
# ============================================================================

def transformation_validator(
    current_solution: dict[str, Any],
    test_results: dict[str, TestResult],
    attachment_threshold: float = 0.7
) -> TransformationDecision:
    """
    Determines if solution should be rejected despite optimality.
    
    Mythological Sources:
    - Sacrificial King (Golden Bough): No attachment to clever solutions
    - Ordeal (Hero's Journey): Transformation requires passage through difficulty
    - Three Fates (Moirai, Norns): Checks if transformation is sustainable
    
    Args:
        current_solution: The solution being evaluated
        test_results: Results from devil pantheon testing
        attachment_threshold: Threshold for detecting attachment bias (0.0-1.0)
    
    Returns:
        TransformationDecision indicating ACCEPT/REJECT/TRANSFORM
    
    Example:
        >>> solution = {"type": "optimization", "bypassed_tests": ["temporal"]}
        >>> tests = {"mephistopheles": PASS, "chronos": SKIPPED}
        >>> decision = transformation_validator(solution, tests)
        >>> print(decision.action)  # REJECT (bypassed ordeal)
    """
    # Sacrificial King: Check for attachment bias
    attachment_score = current_solution.get("attachment_score", 0.5)
    warning_flag = attachment_score > attachment_threshold
    
    # Ordeal: Check if solution bypassed any tests
    bypassed_tests = [
        name for name, result in test_results.items()
        if hasattr(result, 'status') and result.status == "SKIPPED"
    ]
    
    if bypassed_tests:
        return TransformationDecision(
            action=TransformationAction.REJECT,
            reason="Solution bypassed required ordeal",
            confidence=0.95,
            bypassed_tests=bypassed_tests,
            principle="Cannot skip the trial - must face the dragon"
        )
    
    # Three Fates: Check temporal sustainability
    sustainability = temporal_coherence_validator(current_solution)
    
    if sustainability.status == CoherenceStatus.UNSTABLE:
        return TransformationDecision(
            action=TransformationAction.TRANSFORM,
            reason="Solution creates future instability",
            confidence=0.85,
            cascade_warnings=sustainability.cascade_detected,
            principle="The Fates reveal temporal consequences"
        )
    
    # Via Negativa principle: The angel emerges by removing imperfections
    all_passed = all(
        result.status == TestStatus.PASS 
        for result in test_results.values()
    )
    
    if all_passed and not warning_flag:
        confidence = sum(
            r.confidence for r in test_results.values()
        ) / len(test_results) if test_results else 0.5
        
        return TransformationDecision(
            action=TransformationAction.ACCEPT,
            reason="Angel space achieved",
            confidence=confidence,
            principle="Sculpture revealed through removal of imperfections"
        )
    
    # Default: More work needed
    return TransformationDecision(
        action=TransformationAction.TRANSFORM,
        reason="Solution not yet in angel space",
        confidence=0.50
    )


# ============================================================================
# Example Devil Class (for testing multi_perspective_convergence)
# ============================================================================

class ExampleDevil:
    """Example devil for testing purposes."""
    
    def __init__(self, name: str, rejection_threshold: float = 0.5):
        self.name = name
        self.rejection_threshold = rejection_threshold
    
    def test(self, proposal: dict[str, Any]) -> TestResult:
        """Test proposal against this devil's criteria."""
        # Simple example: reject if proposal has "bad_pattern"
        if "bad_pattern" in proposal:
            return TestResult(
                status=TestStatus.REJECT,
                reason=f"{self.name} detected bad pattern",
                confidence=0.90
            )
        
        return TestResult(
            status=TestStatus.PASS,
            reason=f"{self.name} found no violations",
            confidence=0.85
        )


# ============================================================================
# Utility Functions
# ============================================================================

def measure_attachment(solution: dict[str, Any]) -> float:
    """
    Measures attachment bias to a solution.
    Higher scores indicate greater attachment (and greater risk of rationalization).
    """
    # Example implementation - could be made more sophisticated
    attachment_indicators = [
        solution.get("is_clever", False),
        solution.get("is_novel", False),
        solution.get("designer_ego_investment", False)
    ]
    
    return sum(attachment_indicators) / len(attachment_indicators)


def all_tests_passed(test_results: dict[str, TestResult]) -> bool:
    """Checks if all test results are PASS status."""
    return all(
        result.status == TestStatus.PASS 
        for result in test_results.values()
    )
