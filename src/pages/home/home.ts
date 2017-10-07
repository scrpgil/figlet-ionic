import { Component } from '@angular/core';
import * as figlet from 'figlet';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    aa_list:any = [];
    word:string = "";
    svg_s = "<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>" +
    "<foreignObject width='100%' height='100%'>" +
        "<div xmlns='http://www.w3.org/1999/xhtml' style='font:16px Consolas, Courier New, Courier, Monaco,monospace'>";
    svg_e =       "</div>" +
        "</foreignObject>" +
        "</svg>";

    select_fonts:string[] = ["1Row", "3-D", "3D Diagonal", "3D-ASCII"];
    fonts:string[] = ["1Row", "3-D", "3D Diagonal", "3D-ASCII", "3x5", "4Max", "5 Line Oblique", "AMC 3 Line", "AMC 3 Liv1", "AMC AAA01", "AMC Neko", "AMC Razor", "AMC Razor2", "AMC Slash", "AMC Slider", "AMC Thin", "AMC Tubes", "AMC Untitled", "ANSI Shadow", "ASCII New Roman", "Acrobatic", "Alligator", "Alligator2", "Alpha", "Alphabet", "Arrows", "Avatar", "B1FF", "Banner", "Banner3-D", "Banner3", "Banner4", "Barbwire", "Basic", "Bear", "Bell", "Benjamin", "Big Chief", "Big Money-ne", "Big Money-nw", "Big Money-se", "Big Money-sw", "Big", "Bigfig", "Binary", "Block", "Blocks", "Bloody", "Bolger", "Braced", "Bright", "Broadway KB", "Broadway", "Bubble", "Bulbhead", "Caligraphy", "Caligraphy2", "Calvin S", "Cards", "Catwalk", "Chiseled", "Chunky", "Coinstak", "Cola", "Colossal", "Computer", "Contessa", "Contrast", "Cosmike", "Crawford", "Crawford2", "Crazy", "Cricket", "Cursive", "Cyberlarge", "Cybermedium", "Cybersmall", "Cygnet", "DANC4", "DOS Rebel", "DWhistled", "Dancing Font", "Decimal", "Def Leppard", "Delta Corps Priest 1", "Diamond", "Diet Cola", "Digital", "Doh", "Doom", "Dot Matrix", "Double Shorts", "Double", "Dr Pepper", "Efti Chess", "Efti Font", "Efti Italic", "Efti Piti", "Efti Robot", "Efti Wall", "Efti Water", "Electronic", "Elite", "Epic", "Fender", "Filter", "Fire Font-k", "Fire Font-s", "Flipped", "Flower Power", "Four Tops", "Fraktur", "Fun Face", "Fun Faces", "Fuzzy", "Georgi16", "Georgia11", "Ghost", "Ghoulish", "Glenyn", "Goofy", "Gothic", "Graceful", "Gradient", "Graffiti", "Greek", "Heart Left", "Heart Right", "Henry 3D", "Hex", "Hieroglyphs", "Hollywood", "Horizontal Left", "Horizontal Right", "ICL-1900", "Impossible", "Invita", "Isometric1", "Isometric2", "Isometric3", "Isometric4", "Italic", "Ivrit", "JS Block Letters", "JS Bracket Letters", "JS Capital Curves", "JS Cursive", "JS Stick Letters", "Jacky", "Jazmine", "Jerusalem", "Katakana", "Kban", "Keyboard", "Knob", "Konto Slant", "Konto", "LCD", "Larry 3D 2", "Larry 3D", "Lean", "Letters", "Lil Devil", "Line Blocks", "Linux", "Lockergnome", "Madrid", "Marquee", "Maxfour", "Merlin1", "Merlin2", "Mike", "Mini", "Mirror", "Mnemonic", "Modular", "Morse", "Morse2", "Moscow", "Mshebrew210", "Muzzle", "NScript", "NT Greek", "NV Script", "Nancyj-Fancy", "Nancyj-Improved", "Nancyj-Underlined", "Nancyj", "Nipples", "O8", "OS2", "Octal", "Ogre", "Old Banner", "Patorjk's Cheese", "Patorjk-HeX", "Pawp", "Peaks Slant", "Peaks", "Pebbles", "Pepper", "Poison", "Puffy", "Puzzle", "Pyramid", "Rammstein", "Rectangles", "Red Phoenix", "Relief", "Relief2", "Reverse", "Roman", "Rot13", "Rotated", "Rounded", "Rowan Cap", "Rozzo", "Runic", "Runyc", "S Blood", "SL Script", "Santa Clara", "Script", "Serifcap", "Shadow", "Shimrod", "Short", "Slant Relief", "Slant", "Slide", "Small Caps", "Small Isometric1", "Small Keyboard", "Small Poison", "Small Script", "Small Shadow", "Small Slant", "Small Tengwar", "Small", "Soft", "Speed", "Spliff", "Stacey", "Stampate", "Stampatello", "Standard", "Star Strips", "Star Wars", "Stellar", "Stforek", "Stick Letters", "Stop", "Straight", "Stronger Than All", "Sub-Zero", "Swamp Land", "Swan", "Sweet", "THIS", "Tanja", "Tengwar", "Term", "Test1", "The Edge", "Thick", "Thin", "Thorned", "Three Point", "Ticks Slant", "Ticks", "Tiles", "Tinker-Toy", "Tombstone", "Train", "Trek", "Tsalagi", "Tubular", "Twisted", "Two Point", "USA Flag", "Univers", "Varsity", "Wavy", "Weird", "Wet Letter", "Whimsy", "Wow"];

    constructor() {
    }

    onKey(event: any) { // without type info
        this.word = event.target.value;
        this.update();
    }
    update(){
        this.aa_list = [];
        for(var i = 0; i < this.select_fonts.length; i++){
            figlet.text(this.word,this.select_fonts[i], (err, data)=>{
                if (err) {
                    console.log('Something went wrong...');
                    console.dir(err);
                    return;
                }
                this.aa_list.push("\n" + data);
            });
        }
    }
    select(){
        this.update();
    }
}
