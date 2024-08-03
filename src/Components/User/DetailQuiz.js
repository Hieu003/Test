import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom"
import { getDataQuiz } from "../Service/apiService";
import "./DetailQuiz.scss"
import _ from "lodash"; 

const DetailQuiz = (props) => {
    const params = useParams()
    const location = useLocation()
    const quizId = params.id;

    useEffect(() => {
        fetchQuestions()
    }, [quizId])

    const fetchQuestions = async () => {
        let res = await getDataQuiz(quizId);
        if (res && res.EC === 0) {
            let raw = res.DT
            let data = _.chain(raw)
                .groupBy("id")
                .map((value, key) => {
                    let answers = []
                    let questionDescription, image = null
                    value.forEach((item, index) => {
                        if (index === 0) {
                            questionDescription = item.description;
                            image = item.image
                        }
                        answers.push(item.answers);

                    })
                    return { questionId: key, answers, questionDescription, image }
                })
                .value();
                console.log(data);             
        }
    }
    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="q-title">
                    Quiz {quizId}: {location?.state?.quizTitle}
                </div>
                <hr></hr>
               
                <div className="q-content">
                <div className="q-body"> Day la image cho quiz</div>
                <div className="q-question"> Question 1: How are you doing</div>
                <div className="q-answer">
                    <div className="a-child">A. adaddaddada</div>
                    <div className="a-child">B. adaddaddada</div>
                    <div className="a-child">C. adaddaddada</div>
                    <div className="a-child">D. adaddaddada</div>
                </div>
                </div>
                <div className="q-footer">
                    <button className="btn btn-primary">Prev</button>
                    <button className="btn btn-secondary">Next</button>
                </div>


            </div>
            <div className="right-content">day la content ben phai</div>
        </div>
    )
}

export default DetailQuiz