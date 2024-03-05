// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res
    .status(200)
    .json({ name: "Aditya", email: "adi1234@gmail.com", password: "12234" });
}
