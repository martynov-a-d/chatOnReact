import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getArticlesData } from "../../store/additionalApi/actions"
import { dataHandler } from "../dataHandler/dataHandler"
import { apiArticles } from "./apiBox"
import { selectorArticles } from "../../store/additionalApi/selectors"

export const Articles = () => {

    const dispatch = useDispatch()
    const [dataArticles, GetArticles] = useState([])
    useEffect(() => {
        dataHandler(apiArticles, GetArticles, dispatch, "articles")
    }, [dispatch])
    dispatch(getArticlesData(dataArticles))
    const articles = useSelector(selectorArticles)
    if (articles) {
        return <>
            <div className="articles">
                <ul>
                    {articles.map((elem) => (<li key={elem.id}>{elem.title}</li>))}
                </ul>
            </div>
        </>
    }
}