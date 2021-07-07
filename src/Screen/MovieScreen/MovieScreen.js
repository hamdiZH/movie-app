import {FlexColumn, InnerSection, SpinnerContainer} from "../../Global.Styles";
import {
  CardsContainer,
  HeroSection,
  InnerHeroSection,
  MoviesTitle,
} from "../HomeScreen/HomeScreen.Styles";
import {
  InfoText,
  MovieDetailsBox,
  MovieImage,
  MovieInfoBox,
  NavigatorContainer,
  NavigatorInnerContainer,
  ProgressBar,
  ProgressBarContainer,
  ProgressBarPercentage,
} from "./MovieScreen.Styles";
import ActorCard from "../../Components/ActorCard/ActorCard";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {useEffect} from "react";
import {getMovie, getMovies} from "../../Redux/Guest/guestActions";
import Navigator from "../../Components/Navigator/Navigator";

function MovieScreen(props) {
  const state = useSelector(store => store);
  const dispatch = useDispatch();
  const params = useParams();
  const movie = state.guestState.movie;

  useEffect(()=>{
    dispatch(getMovies());
    dispatch(getMovie(params.id));
  }, [dispatch, params.id])

  return state.guestState.isLoading || movie.isLoading ? (
      <SpinnerContainer />
  ) : (
    <FlexColumn>
      <NavigatorContainer>
        <NavigatorInnerContainer>
          <Navigator name={movie.movie.title}/>
        </NavigatorInnerContainer>
      </NavigatorContainer>
      <HeroSection
        img={"http://image.tmdb.org/t/p/w1280/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg"}
      >
        <InnerHeroSection>
          <MovieInfoBox>
            <MovieImage
              src={
                `https://image.tmdb.org/t/p/w500/${movie.movie.poster_path}`
              }
              alt={`${movie.movie.title}`}
            />
            <MovieDetailsBox>
              <InfoText margin={"0 0 25px"} fontSize={30} fontWeight={700}>
                {movie.movie.title}
              </InfoText>
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={700}>
                Polt
              </InfoText>
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={500}>
                {movie.movie.overview}
              </InfoText>
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={700}>
                IMDB RATING
              </InfoText>
              <ProgressBarContainer>
                <ProgressBar>
                  <ProgressBarPercentage width={82} />
                </ProgressBar>
                <InfoText margin={"0 20px"} fontSize={16} fontWeight={500}>
                  {movie.movie.vote_average}
                </InfoText>
              </ProgressBarContainer>{" "}
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={700}>
                DIRECTOR
              </InfoText>
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={500}>
                Enrico Casarosa
              </InfoText>
            </MovieDetailsBox>
          </MovieInfoBox>
        </InnerHeroSection>
      </HeroSection>
      <InnerSection>
        <MoviesTitle>Actors</MoviesTitle>
        <CardsContainer>
          <ActorCard
            key={1}
            id={""}
            name={"img"}
            img={
              "https://image.tmdb.org/t/p/w500//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
            }
          />
          <ActorCard
            key={1}
            id={""}
            name={"img"}
            img={
              "https://image.tmdb.org/t/p/w500//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
            }
          />
          <ActorCard
            key={1}
            id={""}
            name={"img"}
            img={
              "https://image.tmdb.org/t/p/w500//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
            }
          />
          <ActorCard
            key={1}
            id={""}
            name={"img"}
            img={
              "https://image.tmdb.org/t/p/w500//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
            }
          />
          <ActorCard
            key={1}
            id={""}
            name={"img"}
            img={
              "https://image.tmdb.org/t/p/w500//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
            }
          />
        </CardsContainer>
      </InnerSection>
    </FlexColumn>
  );
}

export default MovieScreen;
