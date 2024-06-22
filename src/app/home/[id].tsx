import {useEffect, useState} from "react";

import {DetailOfDiscussion} from "@/model/abstractOfDiscussion";

function Discussion() :React.JSX.Element {
  const [discuss, setDiscuss] = useState<DetailOfDiscussion[]>([]);

  useEffect(() :void => {
    const fetchDiscuss = async () :Promise<void> => {

    }

  }, []);
}
