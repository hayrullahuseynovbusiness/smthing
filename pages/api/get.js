import { client } from "../../utils/supabase";
export default async function handler(req, res) {
  const { slug } = req.query;
  await client.rpc("increment", { slug_text: slug });
  const { data, error } = await client
    .from("posts")
    .select(
      `
  title,
  slug,
  comments(comment,user_name)
  `
    )
    .eq("slug", slug);
  if (error) {
    res.status(500).json(error);
  } else {
    res.status(200).json(data);
  }
}
