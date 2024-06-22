"use client";

import {useParams} from "next/navigation";
import React, {useEffect, useState} from "react";

import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {fetchDiscussionById} from "@/lib/fetchDiscuss";
import {DetailOfDiscussion} from "@/model/abstractOfDiscussion";

function Discussion() :React.JSX.Element {
  const [discuss, setDiscuss] = useState<DetailOfDiscussion[]>([]);
  const {id} : {id: string} = useParams<{id: string}>();
  useEffect(() :void => {
    const fetchDiscuss = async () :Promise<void> => {
      const res :DetailOfDiscussion[] = await fetchDiscussionById(id);
      setDiscuss(res);
    }

    fetchDiscuss().then(r => r);
  }, [id]);

  return (
    <div className="">
      <div className="flex items-center justify-center max-w-lg">
        <Table>
          <TableCaption>会話詳細</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">時間</TableHead>
              <TableHead>話者名</TableHead>
              <TableHead>内容</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              discuss.map((detail: DetailOfDiscussion) => (
                <TableRow key={detail.key}>
                  <TableCell className="font-medium">{detail.key}</TableCell>
                  <TableCell>{detail.speaker_name}</TableCell>
                  <TableCell>{detail.content}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Discussion;