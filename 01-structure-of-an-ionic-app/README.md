# Setup

## Create required apps

    ionic start app01_blank              tabs  --no-link --no-git
    ionic start app02_with_secondpage    tabs  --no-link --no-git
    ionic start app03_with_lazyload      tabs  --no-link --no-git
    ionic start app04_with_css           tabs  --no-link --no-git
	
## Patch HomePage for same result when diff
### home.ts
    export class HomePage {
      public lesson="1.1"
      public title="App with blank Page"

### home.html
    <ion-header>
      <ion-navbar>
        <ion-title>Lesson {{ lesson }}: {{ title }}</ion-title>
      </ion-navbar>
    </ion-header>
    
    <ion-content padding class="page-home">
      <h1>{{ title }}</h1>
    </ion-content>

# Start analyse
Compearw app01_blank  with app02_with_secondpage

# Modify App

## Add second page to app02_with_secondpage

    cd app02_with_secondpage
    ionic generate page SecondPage
