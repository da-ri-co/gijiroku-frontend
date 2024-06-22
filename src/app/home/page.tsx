"use client";

import React, {useEffect, useState} from "react";

import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {fetchAllDiscussions} from "@/lib/fetchDiscuss";
import {AbstractOfDiscussion} from "@/model/abstractOfDiscussion";

function Home() : React.JSX.Element {
  const [discussionList, setDiscussionList] = useState<AbstractOfDiscussion[]>([]);
  useEffect(() => {
    const fetchDiscussions = async ():Promise<void> => {
      const res :AbstractOfDiscussion[] = await fetchAllDiscussions();
      setDiscussionList(res);
    };
    fetchDiscussions().then(r => r);
  }, []);

  return (
    <div className="">
      <div className="flex items-center justify-center max-w-lg">
        <Table>
          <TableCaption>会話リスト</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ギルドID</TableHead>
              <TableHead>記録開始日時</TableHead>
              <TableHead>タイトル by Bedrock</TableHead>
              <TableHead className="text-right">概要</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              discussionList.map((discussion: AbstractOfDiscussion) => (
              <TableRow key={discussion.id}>
                <TableCell className="font-medium">{discussion.guild_id}</TableCell>
                <TableCell>{discussion.start_time}</TableCell>
                <TableCell>{discussion.title}</TableCell>
                <TableCell className="text-right">{discussion.abst}</TableCell>
              </TableRow>
            ))
            }
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Home;
