import { connect } from 'react-redux';
import ImagesHandling from '../Components/ImagesHandling';
import NavigationService from "../NavigationService";
import { uploadImage,getImages } from "../Actions/UserActions";

function mapStateToProps(state, props) {
  console.log("Kibaszott props: ",state.User);
    
    return {
        userData: state.User,
       
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        goToPage: (page) => NavigationService.navigate(page),
        sendPictures:(img) => dispatch(uploadImage(img)),
        getImage:(email)=>dispatch(getImages(email))
    };
}

const ImagesHandlingContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ImagesHandling);

export default ImagesHandlingContainer;