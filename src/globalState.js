import {useState, useEffect} from "react";

const GlobalState = () =>{
    const [feedbackData, setFeedbackData]= useState([]);
    const [isLoaded, setIsLoaded]=useState([{isLoaded:false}]);

  useEffect(()=>{
    const getData = async()=> {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();

        const feedback=data.map(fb=>{
            return{
                id:fb.id,
                title:fb.title,
                body:fb.body,
                likes:fb.userId
            }
        })
        setFeedbackData(feedback);
    }

    if({isLoaded}) {
        getData();
    } else {
        console.log("Cannot load");
    }

    return ()=>{setIsLoaded([{isLoaded:true}])}
}, [isLoaded])

const [sort, setSort]=useState("Select sort");

  useEffect(()=> {
    const sortByLikes = method => {
        if(method === "Most likes") {
        const sorted = [...feedbackData].sort((a,b)=> b.likes-a.likes);
        setFeedbackData(sorted);
      } else {
        const defaultSort=[...feedbackData].sort((a,b)=>a.likes-b.likes);
        setFeedbackData(defaultSort);
      };
    };

    sortByLikes(sort);
  }, [sort])

  const [posting, setPosting] = useState(false);

  const [styles, setStyles]=useState({postDisplay:{visibility:"hidden"}, editPostDisplay:{visibility:"hidden"}})

  const postingStatus = (e) =>{
    e.preventDefault();
    setPosting(true);
    setStyles({postDisplay:{visibility:"visible"}, editPostDisplay:{visibility:"hidden"}});
  }

  const [editPostId, setEditPostId]=useState("");
  const [edited, setEdited]=useState(false);

  const editPostStatus = (e, id) => {
    e.preventDefault();
    setPosting(true);
    setEditPostId(id);
    setStyles({postDisplay:{visibility:"hidden"}, editPostDisplay:{visibility:"visible"}})
  }

  const closePostForm = (e)=>{
    e.preventDefault();
    setPosting(false);
    setStyles({postDisplay:{visibility:"hidden"}, editPostDisplay:{visibility:"hidden"}});
  }

  return {
      setSort,
      feedbackData,
      setFeedbackData,
      postingStatus,
      closePostForm,
      styles,
      sort,
      editPostStatus,
      editPostId,
      edited, setEdited
  }
}

export default GlobalState;