const categorizeTests = (tests) => {
  const testsCategorized = {
    P1: [],
    P2: [],
    P3: [],
    ch: [],
    Outras: [],
  };

  for (let i = 0; i < tests.length; i++) {
    if (tests[i].category.name === "P1") {
      testsCategorized.P1.push(tests[i]);
    }
    if (tests[i].category.name === "P2") {
      testsCategorized.P2.push(tests[i]);
    }
    if (tests[i].category.name === "P3") {
      testsCategorized.P3.push(tests[i]);
    }
    if (tests[i].category.name === "2ch") {
      testsCategorized.ch.push(tests[i]);
    }
    if (tests[i].category.name === "Outras") {
      testsCategorized.Outras.push(tests[i]);
    }
  }

  return testsCategorized;
};

export { categorizeTests };
