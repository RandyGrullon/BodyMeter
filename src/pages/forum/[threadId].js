// pages/forum/[threadId].js
import React from "react";
import { useRouter } from "next/router";
import ForumThread from "../../components/ForumThread";

const ForumThreadPage = () => {
  const router = useRouter();
  const { threadId } = router.query;

  return <ForumThread threadId={threadId} />;
};

export default ForumThreadPage;
