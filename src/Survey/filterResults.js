function filterResults(results) {
  var filtered_results = {
    motivation: { intrinsic: 0, introjected: 0, identified: 0, external_motivation: 0 },
    passion: { inventing: 0, founding: 0, developing: 0 },
    effort: { immediate: 0, beyond: 0, develop: 0 },
    growth: 0,
    orientation: { risk_taking: 0, innovativeness: 0, proactivity: 0 },
    self_efficacy: 0,
    need_to_achieve: 0,
    grit: 0,
    ambiguity_tolerance: 0,
    resilience: 0,
    satisfaction: 0
  }

  for (let [key, value] of Object.entries(results)) {
    if (key.includes("Business") || key.includes("Educational")) {
      console.log(key + " - " + value);
    }
    if (key.includes("motivation")) {
      for (let [a, v] of Object.entries(value)) {
        if (a.includes("intrinsic")) {
          filtered_results.motivation.intrinsic += parseInt(v, 10);
        } else if (a.includes("identified")) {
          filtered_results.motivation.identified += parseInt(v, 10);
        } else if (a.includes("introjected")) {
          filtered_results.motivation.introjected += parseInt(v, 10);
        } else if (a.includes("external")) {
          filtered_results.motivation.external_motivation += parseInt(v, 10);
        }
      }
    }
    if (key.includes("passion")) {
      for (let [a, v] of Object.entries(value)) {
        if (a.includes("inventing")) {
          filtered_results.passion.inventing += parseInt(v, 10);
        } else if (a.includes("founding")) {
          filtered_results.passion.founding += parseInt(v, 10);
        } else if (a.includes("developing")) {
          filtered_results.passion.developing += parseInt(v, 10);
        }
      }
    }
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
    if (key.includes("growth")) {
      filtered_results.growth += parseInt(value, 10);
    }
    if (key.includes("orientation")) {
      for (let [a, v] of Object.entries(value)) {
        if (a.includes("risk-taking")) {
          filtered_results.orientation.risk_taking += parseInt(v, 10);
        } else if (a.includes("innovativeness")) {
          filtered_results.orientation.innovativeness += parseInt(v, 10);
        } else if (a.includes("proactivity")) {
          filtered_results.orientation.proactivity += parseInt(v, 10);
        }
      }
    }
    if (key.includes("efficacy")) {
      let vals = Object.values(value);
      for (let val of vals) {
        filtered_results.self_efficacy += parseInt(val, 10);
      }
    }
    if (key.includes("need to achieve")) {
      let vals = Object.values(value);
      for (let val of vals) {
        filtered_results.need_to_achieve += parseInt(val, 10);
      }
    }
    if (key.includes("grit")) {
      let vals = Object.values(value);
      for (let val of vals) {
        filtered_results.grit += parseInt(val, 10);
      }
    }
    if (key.includes("tolerance")) {
      let vals = Object.values(value);
      for (let val of vals) {
        filtered_results.ambiguity_tolerance += parseInt(val, 10);
      }
    }
    if (key.includes("resilience")) {
      let vals = Object.values(value);
      for (let val of vals) {
        filtered_results.resilience += parseInt(val, 10);
      }
    }
    if (key.includes("satisfaction")) {
      let vals = Object.values(value);
      for (let val of vals) {
        filtered_results.satisfaction += parseInt(val, 10);
      }
    }
  }
  return filtered_results;
}
export default filterResults;