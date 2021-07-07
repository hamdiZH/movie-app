import {FlexColumn, InnerSection, SpinnerContainer} from "../../Global.Styles";
import {
    CardsContainer,
    Description,
    HeroSection,
    InnerHeroSection,
    LoadMore,
    MoviesTitle,
    Title,
} from "./HomeScreen.Styles";
import Card from "../../Components/Card/Card";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getMovies} from "../../Redux/Guest/guestActions";

function HomeScreen() {
    const [page, setPage] = useState(1)
    const state = useSelector(store => store);
    const dispatch = useDispatch();

    const movies = state.guestState;

    useEffect(() => {
        dispatch(getMovies(page));
    }, [dispatch, page]);


    return (
        <FlexColumn>
            <HeroSection
                img={"http://image.tmdb.org/t/p/w1280/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg"}
            >
                <InnerHeroSection>
                    <Title>Title</Title>
                    <Description>
                        This is just a film description to get from the api
                    </Description>
                </InnerHeroSection>
            </HeroSection>
            <InnerSection>
                <MoviesTitle>Popular Movies</MoviesTitle>
                {movies.isLoading ? (
                    <SpinnerContainer />): (
                <CardsContainer>
                    {console.log(movies.movies)}
                    {movies.movies.map((item) => (
                        <Card
                            key={item.id}
                            id={item.id}
                            name={item.title}
                            link={`/movie/${item.id}/${item.title}`}
                            img={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                        />

                    ))}
                </CardsContainer>
                )}

                <LoadMore
                    isLoading={false}
                    onClick={()=> {
                        dispatch(getMovies(page));
                        setPage(page + 1)
                    }}>
                    Load more...
                </LoadMore>
            </InnerSection>
        </FlexColumn>
    );
}

export default HomeScreen;
