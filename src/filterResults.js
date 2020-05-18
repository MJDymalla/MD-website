function filterResults(results) {
  var filtered_results = {
    motivation: {
      intrinsic: 0,
      introjected: 0,
      identified: 0,
      external_motivation: 0
    },
    passion: {
      inventing: 0,
      founding: 0,
      developing: 0
    },
    effort: {
      immediate: 0,
      beyond: 0,
      develop: 0
    },
    growth: 0,
    orientation: {
      risk_taking: 0,
      innovativeness: 0,
      proactivity: 0
    },
    self_efficacy: 0,
    need_to_achieve: 0,
    grit: 0,
    ambiguity_tolerance: 0,
    resilience: 0,
    satisfaction: 0
  }

  for (let [key, value] of Object.entries(results)) {
    // Contextual question data
    if (key.includes("Business") || key.includes("Educational")) {
      console.log(key + " - " + value);
    }

    // Motivation based questions
    if (key.includes("motivation")) {
      for (let [a, v] of Object.entries(value)) {
        if (a === "intrinsic") {
          filtered_results.motivation.intrinsic += parseInt(v, 10);
        } else if (a === "identified") {
          filtered_results.motivation.identified += parseInt(v, 10);
        } else if (a === "introjected") {
          filtered_results.motivation.introjected += parseInt(v, 10);
        } else if (a === "external") {
          filtered_results.motivation.external_motivation += parseInt(v, 10);
        }
      }
    }

    // Passion based questions
    if (key.includes("passion")) {
      for (let [a, v] of Object.entries(value)) {
        if (a === "passion for inventing") {
          filtered_results.passion.inventing += parseInt(v, 10);
        } else if (a === "passion for founding") {
          filtered_results.passion.founding += parseInt(v, 10);
        } else if (a === "passion for developing") {
          filtered_results.passion.developing += parseInt(v, 10);
        }
      }
    }

    // Effort based questions
    if (key.includes("effort")) {
      for (let [a, v] of Object.entries(value)) {
        if (a === "immediate") {
          filtered_results.effort.immediate += parseInt(v, 10);
        } else if (a === "beyond") {
          filtered_results.effort.beyond += parseInt(v, 10);
        } else if (a === "developing") {
          filtered_results.effort.develop += parseInt(v, 10);
        }
      }
    }

    // Growth based questions
    if (key.includes("growth")) {
      filtered_results.growth += parseInt(value, 10);
    }

    // IEO based questions
    if (key.includes("orientation")) {
      for (let [a, v] of Object.entries(value)) {
        if (a === "risk-taking") {
          filtered_results.orientation.risk_taking += parseInt(v, 10);
        } else if (a === "innovativeness") {
          filtered_results.orientation.innovativeness += parseInt(v, 10);
        } else if (a === "proactivity") {
          filtered_results.orientation.proactivity += parseInt(v, 10);
        }
      }
    }

    // self efficacy questions
    if (key.includes("efficacy")) {
      for (let [a, v] of Object.entries(value)) {
        if (a === "efficacy A") {
          filtered_results.self_efficacy += parseInt(v, 10);
        }
      }
    }

    // need to achieve questions
    if (key.includes("need to achieve")) {
      for (let [a, v] of Object.entries(value)) {
        filtered_results.need_to_achieve += parseInt(v, 10);
      }
    }

    // grit questions
    if (key.includes("grit")) {
      for (let [a, v] of Object.entries(value)) {
        filtered_results.grit += parseInt(v, 10);
      }
    }

    // tolerance for ambiguity questions
    if (key.includes("tolerance")) {
      for (let [a, v] of Object.entries(value)) {
        filtered_results.ambiguity_tolerance += parseInt(v, 10);
      }
    }

    // resilience questions
    if (key.includes("resilience")) {
      for (let [a, v] of Object.entries(value)) {
        filtered_results.resilience += parseInt(v, 10);
      }
    }

    // satisfaction questions
    if (key.includes("satisfaction")) {
      for (let [a, v] of Object.entries(value)) {
        filtered_results.satisfaction += parseInt(v, 10);
      }
    }
  }

  return filtered_results;
}
export default filterResults;