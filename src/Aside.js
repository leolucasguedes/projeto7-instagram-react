export default function Aside() {
  return (
    <aside>
      <div class="usuario">
        <img src="./assets/catanacomics.svg" />
        <div class="texto">
          <strong>catanacomics</strong>
          Catana
        </div>
      </div>

      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        <Sugestao imagem="./assets/bad.vibes.memes.svg" nome="bad.vibe.memes" />
        <Sugestao imagem="./assets/chibirdart.svg" nome="chibirdart" />
        <Sugestao
          imagem="./assets/adorable_animals.svg"
          nome="adorable_animals"
        />
        <Sugestao
          imagem="./assets/razoesparaacreditar.svg"
          nome="razoesparaacreditar"
        />
        <Sugestao imagem="./assets/smallcutecats.svg" nome="smallcutecats" />
      </div>

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </aside>
  );
}

function Sugestao(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.imagem} />
        <div class="texto">
          <div class="nome">{props.nome} </div>
          <div class="razao">Segue você</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}
