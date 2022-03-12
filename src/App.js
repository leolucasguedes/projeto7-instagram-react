import Header from './Header';
import Stories from './Stories';
import Post from './Post';
import Post2 from './Post2';
import Aside from './Aside';
import Footer from './Footer';


function Container(){
    return(
<div class="esquerda">
    <Stories />
	<Post />
    <Post2 />
    </div>
  );
}


function Main() {
  return (
    <main>
      <Container />
      <Aside />
    </main>
  );
}



export default function App() {
    return (
        <div>
            <Header />
			<Main />
            <Footer />
		</div>
    );
}