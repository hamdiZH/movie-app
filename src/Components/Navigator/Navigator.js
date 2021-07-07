import {useHistory} from "react-router";
import {NavigatorSpan} from "../../Screen/MovieScreen/MovieScreen.Styles";

function Navigator(props) {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };
    return (
        <NavigatorSpan>
            <span
              style={{color: "#707070", marginRight: 5, cursor: "pointer"}}
              onClick={goBack}
            >
                Back
            </span>
                /{props.name}
        </NavigatorSpan>
    );
}

export default Navigator;