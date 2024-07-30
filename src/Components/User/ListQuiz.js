import { useEffect, useState } from "react";
import { getQuizByUser } from "../Service/apiService";
import './/ListQuiz.scss'
const ListQuiz = (props) => {
    const [quizArray, setQuizArray] = useState([])
    useEffect(() => {
        getQuizData();
    }, []);

    const getQuizData = async () => {
        const res = await getQuizByUser();
        if (res && res.EC == 0) {
            setQuizArray(res.DT)
        }
        console.log("res", res);
    }
    return (
        <div className="quiz-container container">
            {quizArray && quizArray.length > 0 &&
                quizArray.map((quiz, index) => {
                    return (
                        <div key={`${index}-quiz`} className="card" style={{ width: "18rem" }}>
                            <img className="card-img-top" src={`data:image/png;base64, ${quiz.image}`} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Quiz {index + 1}</h5>
                                <p className="card-text">{quiz.description}.</p>
                                <button className="btn btn-primary">Start Quiz</button>
                            </div>
                        </div>
                    )
                })
            }

        </div >
    )
}

export default ListQuiz;