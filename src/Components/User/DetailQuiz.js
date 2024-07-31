import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { getDataQuiz } from "../Service/apiService";

const DetailQuiz = (props) => {
    const params = useParams()
    const quizId = params.id;

    useEffect(() => {
        fetchQuestions()
    }, [quizId])

    const fetchQuestions = async () => {
        let res = await getDataQuiz(quizId);
        console.log("check question", res);
    }
    return (
        <span>DetailQuiz</span>
    )
}

export default DetailQuiz