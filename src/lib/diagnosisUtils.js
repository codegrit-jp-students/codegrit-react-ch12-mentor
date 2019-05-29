export const calcBmi = (height, weight) => {
  console.log(height)
  console.log(weight)
  return Math.round(weight / (height * height / 10000.0) * 10) / 10.0;
}

export const calcIdealWeight = (height) => {
  return Math.round(height * height / 1000 * 22) / 10.0;
}

export const getEvaluationJesso = (bmi) => {
  if (bmi < 18.5) return '低体重'
  if (bmi < 25) return '普通体重'
  if (bmi < 30) return '肥満（１度）'
  if (bmi < 35) return '肥満（２度）'
  if (bmi < 40) return '肥満（３度）'
  return '肥満（４度）'
}

export const getEvaluationForMale = (bmi, fatRate) => {
  if (fatRate < 8) {
    if (bmi < 16) return "少し痩せすぎです。"
    if (bmi < 21) return "マラソン選手やボルダリング選手に近い体型です。"
    if (bmi < 24) return "ボクサーに近い体型です。"
    return "ボディビルダーのような体型です。"
  }
  if (fatRate < 12) {
    if (bmi < 16) return "少し痩せすぎです。"
    if (bmi < 21) return "少し細めの体型ですがもう少し体重と筋肉量を増やせば理想的な細マッチョ体型です。"
    if (bmi < 24) return "理想的な細マッチョ体型です。"
    return "野球選手のような体型です。"
  }
  if (fatRate < 17) {
    if (bmi < 18.5) return "痩せていますが、少し脂肪率が高めです。内蔵脂肪が多い可能性があります。"
    if (bmi < 23) return "標準的な体型です。"
    if (bmi < 26) return "もう少し脂肪率を落とせば、理想的な細マッチョ体型です。"
    if (bmi < 29) return "もう少し脂肪率を落とせば、理想的なマッチョ体型です。"
    return "筋力系アスリートのような体型です。"
  }
  if (fatRate < 22) {
    if (bmi < 18.5) return "痩せていますが、少し脂肪率が高めです。内蔵脂肪が多い可能性があります。"
    if (bmi < 23) return "標準的な体型です。"
    if (bmi < 26) return "マッチョ体型です。脂肪率をさらに落とすと理想的な細マッチョ体型を目指せます。"
    return "やや体脂肪率が高めです。脂肪率を下げることで理想的なマッチョ体型を目指しましょう。"
  }
  if (fatRate < 27) {
    if (bmi < 18.5) return "痩せていますが、脂肪率が高めです。内蔵脂肪を減らす必要があります。"
    if (bmi < 23) return "標準的な体型ですが、脂肪率が高めです。メタボリック症候群に気をつける必要があります。"
    if (bmi < 26) return "やや体脂肪が高めです。脂肪率をさげて細マッチョ体型を目指しましょう。"
    return "体脂肪率が高めです、まずは脂肪率を下げましょう。"
  }
  if (bmi < 18.5) return "痩せていますが、非常に脂肪率が高いです。内蔵脂肪を減らす必要があります。"
  if (bmi < 23) return "標準的な体型ですが、脂肪率が高です。内蔵脂肪、皮下脂肪ともに減らす必要があります。"
  return "非常に脂肪率が高いです。内蔵脂肪、皮下脂肪ともに減らす必要があります。"
}

export const getEvaluationForFemale = (bmi, fatRate) => {
  if (fatRate < 12) {
    if (bmi < 16) return "少し痩せすぎです。"
    if (bmi < 22) return "マラソン選手やスケート選手に近い体型です。"
    return "相当鍛え込んでますね。筋力系アスリートの体型です。"
  }
  if (fatRate < 20) {
    if (bmi < 18) return "モデル体型です。"
    if (bmi < 22) return "アスリートに近い理想的な体型です。"
    return "相当鍛え込んでますね。筋力系アスリートの体型です。"
  }
  if (fatRate < 25) {
    if (bmi < 18) return "モデル体型ですがやや脂肪率が高めです。筋力を増やすことでよりバランスの取れた体を目指しましょう。"
    if (bmi < 22) return "バランスの取れた理想的な体型です。"
    return "標準体型です。少し筋力を増やし体重を減らすと理想的な体型になります。"
  }
  if (fatRate < 30) {
    if (bmi < 18) return "痩せていますががやや脂肪率が高めです。内蔵脂肪が多めの可能性が高いです。食生活に気をつけることでより理想的な体型に近づきます。"
    if (bmi < 22) return "バランスの良い体型ですが、やや脂肪率が高めです。筋肉を維持しつつ体重を減らすことでより理想的な体型が近づきます。"
    return "やや脂肪率が高めです。筋肉量を維持しつつ脂肪率を落とすことで理想的な体型が手に入ります。"
  }
  if (bmi < 18) return "痩せていますがが脂肪率が高めです。内蔵脂肪が多い可能性が高いです。食生活に気をつけることでより理想的な体型に近づきます。"
  if (bmi < 22) return "脂肪率が高めです。まずは体重を減らすことでより理想的な体型が近づきます。"
  return "脂肪率が高めです。まずは脂肪率を落としより理想的な体型を目指しましょう。"
}