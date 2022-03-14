export default function Aside() {
  const usuario = { user: "catanacomics", nome: "Catana" };
  const sugestoesARR = [
    {imagem:"./assets/bad.vibes.memes.svg", nome:"bad.vibe.memes"},
    {imagem:"./assets/chibirdart.svg", nome:"chibirdart"},
    {imagem:"./assets/adorable_animals.svg", nome:"adorable_animals"},
    {imagem:"./assets/razoesparaacreditar.svg", nome:"razoesparaacreditar"},
    {imagem:"./assets/smallcutecats.svg", nome:"smallcutecats"}]
  return (
    <aside>
      <div className="usuario">
        <img src="./assets/catanacomics.svg" />
        <div className="texto">
          <strong>{usuario.user}</strong>
          {usuario.nome}
        </div>
      </div>

      <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>
        {sugestoesARR.map(sugestao => <Sugestao imagem={sugestao.imagem} nome={sugestao.nome} />)}
      </div>

      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </aside>
  );
}

function Sugestao(props) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={props.imagem} />
        <div className="texto">
          <div className="nome">{props.nome} </div>
          <div className="razao">Segue você</div>
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  );
}
