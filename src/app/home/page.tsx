"use client";

import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";

import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {fetchAllDiscussions} from "@/lib/fetchDiscuss";
import {AbstractOfDiscussion} from "@/model/abstractOfDiscussion";

function Home() : React.JSX.Element {
  const router = useRouter();
  const [discussionList, setDiscussionList] = useState<AbstractOfDiscussion[]>([]);
  useEffect(():void => {
    const fetchDiscussions = async ():Promise<void> => {
      const res :AbstractOfDiscussion[] = await fetchAllDiscussions();
      setDiscussionList(res);
    };
    fetchDiscussions().then(r => r);
  }, []);

  return (
    <div className="bg-white">
      <div className="h-screen w-screen mt-6 p-6">
        <Table>
          <TableCaption>会話リスト</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ギルドID</TableHead>
              <TableHead>記録開始日時</TableHead>
              <TableHead>タイトル by Bedrock</TableHead>
              <TableHead>概要</TableHead>
              <TableHead>操作</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              discussionList.map((discussion: AbstractOfDiscussion) => (
              <TableRow
                key={discussion.id}
                onClick={():void => {

                }}
              >
                <TableCell className="font-medium">{discussion.guild_id}</TableCell>
                <TableCell>{discussion.start_time}</TableCell>
                <TableCell>{discussion.title}</TableCell>
                <TableCell className="text-right">{discussion.abst}</TableCell>
                <TableCell>
                  <button
                    className="text-blue-500"
                    onClick={() :void => {
                      router.push(`/home/${discussion.id}`);
                    }}
                  >
                    詳細
                  </button>
                </TableCell>
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
