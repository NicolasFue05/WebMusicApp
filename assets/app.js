// musics cards
class MusicCard extends HTMLElement {
    constructor() {
        super();

        // Attach a shadow DOM tree to the instance
        this.attachShadow({ mode: 'open' });

        // Create elements for the component
        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute('class', 'playlist-container');

        // Imagen de playlist
        this.image = document.createElement('img');
        this.image.src = this.getAttribute('image');
        this.image.alt = "Playlist Title";

        this.title = document.createElement('h3');
        this.title.textContent = this.getAttribute('title');

        this.description = document.createElement('p');
        this.description.textContent = this.getAttribute('description');

        // Append elements to the shadow DOM
        this.wrapper.appendChild(this.image);
        this.wrapper.appendChild(this.title);
        this.wrapper.appendChild(this.description);
        this.shadowRoot.appendChild(this.wrapper);

        // Add styles to the component
        const style = document.createElement('style');
        style.textContent = `
            .playlist-container{
                height: none;
                margin-left: 10px;
                padding: 3px;
            }

            .playlist-container:first-child {
                margin-left: 0;
            }
        
            .playlist-container img {
                border-radius: 20px;
                height: 200px;
                width: 200px;
                margin-bottom: 10px;
            }

            .playlist-container h3 {
                margin-bottom: 10px;
            }
        `;
        this.shadowRoot.appendChild(style);
    };
};

// Define the new element
customElements.define('music-card', MusicCard);