

// * Util function to increase opacity on downwards scroll
// ----------------------------------
const opacityOnScroll = () => {
  window.onscroll =()=>{
    const newScrollHeight = Math.ceil(window.scrollY / 50) *50;
    var maxScrollHeight = Math.ceil(window.innerHeight);
    const currentOpacity = Math.min( (this.state.currentScrollHeight/maxScrollHeight) , 1);
    if (currentOpacity === 1){null}
    if (this.state.currentScrollHeight !== newScrollHeight){
        this.setState({currentScrollHeight: newScrollHeight})
    }
  }
}
// maxScrollHeight is the adjustment for when you'd like the scroll function to start effecting opacity
var maxScrollHeight = Math.ceil(window.innerHeight-200);
const backgroundOpacity = Math.min( (this.state.currentScrollHeight/maxScrollHeight) , 1) || 0

// ----------------------------------
