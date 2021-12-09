export default function Team(props){
    //Destructuracion para sacar los elementos que vienen dentro del props
    const {team, key} = props

    return (
        <div className="column is-one-quarter-desktop is-half-tablet" key={key}>
            <div className="card">
                <div className="card-image">
                <figure className="image is-4by3">
                    <img src={team.logo} alt={team.logo} height={100} width={100}></img>
                </figure>
                </div>
                <div className="card-content">
                    <div className="media">                   
                        <div className="media-content">
                        <p className="title is-4">{team.name}</p>
                        <p className="subtitle is-6">@johnsmith</p>
                        </div>
                    </div>

                    <div className="content">
                        Stadium: {team.stadium}
                        <a href="#">#css</a> <a href="#">#responsive</a>
                    </div>
                </div>
            </div>
        </div>
    )
}