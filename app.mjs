import remarkHtml from "remark-html";

const main = async () => {
  const text = remarkHtml().parse("#hello");
  console.log(text);
};
main();
