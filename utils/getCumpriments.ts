export function getCumpriments(): "Bom dia!" | "Boa tarde!" | "Boa noite!" {
  const now = new Date()
  const hours = now.getHours()

  if (hours >= 5 && hours < 12) {
    return "Bom dia!";
  } else if (hours >= 12 && hours < 18) {
    return "Boa tarde!";
  } else {
    return "Boa noite!";
  }
}