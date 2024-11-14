import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
    const { data } = useLoaderData()

    return (
        <div className="flex flex-col gap-7">
            {data.map(singleNews=><NewsCard key={singleNews._id} news={singleNews}></NewsCard>)}
        </div>
    );
};

export default CategoryNews;