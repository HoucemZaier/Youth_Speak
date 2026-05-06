export function matchSkillsToNeeds(skills, needs) {
  const tokenize = (text) =>
    text
      .toLowerCase()
      .split(/[^a-zA-Z0-9]+/)
      .filter((w) => w.length > 2)

  return needs.map((need) => {
    const needWords = new Set(tokenize(need.description))
    const needTags = new Set((need.tags || []).map(t => t.toLowerCase()))

    const scoredSkills = skills
      .map((skill) => {
        const skillWords = tokenize(skill.description)
        const skillTags = new Set((skill.tags || []).map(t => t.toLowerCase()))

        // Points pour mots-clés communs
        const wordScore = skillWords.filter((w) => needWords.has(w)).length

        // Points pour tags communs
        const tagScore = [...skillTags].filter(t => needTags.has(t)).length

        // Score final (tags pèsent plus)
        const totalScore = wordScore + (tagScore * 2)

        return { ...skill, score: totalScore }
      })
      .filter((s) => s.score > 0)
      .sort((a, b) => b.score - a.score)

    return { ...need, matches: scoredSkills }
  })
}
