import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import harmony from '../../assets/images/color_theory.png';
import serif from '../../assets/images/serif.png';
import display from '../../assets/images/display_fonts.jpg';

import left from '../../assets/images/left-arrow.png';
import right from '../../assets/images/right-arrow.png';
import colorScheme from '../../assets/images/cooler-scheme.png'
import home from '../../assets/images/home-icon.png';

const ColorTheory = () => {

    useEffect(() => {
        const nav = document.getElementById("navigation");
        const foot = document.getElementById("footer-container");
        if (nav.style.display === "none") {
            nav.style.display = "block";
        }
        if (foot.style.display === "none") {
            foot.style.display = "flex";
        }
    })

    return (
        <div className="article-container">
            <div className="arrow-wrap">
                    <Link to="/application-planning" ><img src={left} className="left" /></Link>
                    <Link to="/blog" ><img src={right} className="right" /></Link>
                </div>
            <h1 className="article-title">Colors and Fonts</h1>
            <div className="color-image-container">
                <img className="color-scheme" src={colorScheme} alt="color scheme" />
            </div>
            <h2>Color Theory</h2>
            <article className="article-columns">
                <p>
                    I wasn't quite sure how to decide on which colors to use for my blog design, however, I know I wanted 
                    some contrast and a minor pop of color.  I decided to look a little into color theory in order to organize
                    my thoughts.  Through my research, I discovered several themes that designers naturally rely on.

                </p>
                <p>
                    <strong>Monochromatic</strong> color schemes rely on varying the shade of one specific color.  It is easy to use and hard
                    to make ugly unless you make a poor base color selection.
                </p>
                <p>
                    <strong>Analogous</strong> themes use one dominant color in addition to the neighboring colors on the color
                    wheel.  Sometimes the third color can be a contrasting color pop option.  The dominant color should be the main
                    color on the page, with the supporting colors as accents.  Using analogous colors with some neutrals is a great start
                    for a budding designer.
                </p>
                <p>
                    <strong>Complementary</strong> design selects one main color and then uses the color opposite that main
                    color to maximize contrast.  This visually makes the opposing color selection pop and really draw the viewers
                    eyes.  The contrasting color will demand attention, so it is great for highlighting buttons.
                </p>
                <p>
                    <strong>Triadic</strong> schemes are constructed around three colors that are equidistant on the color wheel.
                    This enables larger color combinations, contrast, and personality on a page.  It is a little more complicated than
                    the previously mentioned color theories.
                </p>

                <p>
                    After performing my research on color theory, it was time for me to make my decision on my own color scheme.  I
                    wanted to go for a more muted and softer contrast with my main colors.  I stumbled across a wonderful website named 
                    <a href="https://coolors.co/" target="_blank"> Coolors</a> that allows you to simply push the space bar and get a randomly
                    generated color scheme.  I was surprised by how appealing the options were.  The site is also interactive in the sense
                    that the user can lock in specific colors, alter the saturation and hue, and provides alternate shades with the click
                    of a button.  This made my color selection easy as I slowly locked in on colors that I felt worked harmoniously together.
                </p>
                <p>
                    In the end, I decided on an off-white called Honeydew as my main, neutral color.  To contrast that, I brought in two
                    dark colors of a similar shade called Middle Red Purple and Deep Koamaru.  Finally, I wanted two colors to accent the
                    page, so I brought in Unmellow Yellow and Spanish Violet.  You can see my final selection from Coolors in the main image
                    located at the top of the article, or, since you are already on my page, you can easily click around.
                </p>
            </article>
            <div className="art-image-container">
                <img className="color-image" src={harmony} alt="color schemes examples" />
            </div>
            <h2>Fonts</h2>
            <article className="article-columns">
                <p>
                    In selecting a font, I took a deep dive into responsive web design and typography.  It was all very interesting, but I'll
                    sum up some highlights here.
                </p>
                <p>
                    When it comes to font-styles, the most common options are <strong>serif, sans-serif, display, handwriting, and monospace</strong>.
                    I never knew the difference between serif and sans-serif, but basically serif has extra details in curls and accents on each
                    individual letter.  Sans-serif removes these accents and is visually a more block style text.  Display fonts can be large and
                    creative.  I think about the signs outside restaurants that really draw in your attention in regards to display style fonts.
                    Handwriting is pretty self-explanatory, it is a form of cursive.  Finally, monospace type keeps the spacing between the individual
                    characters at an even length.
                </p>
                <p>
                    I also learned that importing fonts onto a page can be very heavy upon loading.  If the font takes too long to load,
                    then the page will be delayed upon load and there is a risk the user may move on to a different page.  It is recommended
                    that websites us at max two fonts for styling and include minimal variations of weight for speedy loading.  These two fonts
                    should come from different styles, so pairing a serif and sans-serif is an excellent choice.
                </p>
                <p>
                    Another piece of information that I came across, which is naturally intuitive and good to keep in mind, is that font size and 
                    spacing should resize based on the size of the device: desktop, tablet, or mobile.  In general, headers should be smaller on
                    smaller devices thus allowing the maximum information to be displayed on the screen at one time.  Readers have the best
                    experience when columns of text are maxed at 38em.  This reduces the probability of the eye getting lost tracking its position
                    along the line.
                </p>
                <p>
                    For this application, I attempted to follow the above rules.  I created a responsive text design for mobile and desktop and took
                    care to resize headers as needed on smaller devices.  In addition, I only selected two contrasting fonts with minimal weight variations.
                    My title font is Cormorant Garamond and my body text is Catamaran.  I linked in both in my html via a link from <a href="https://fonts.google.com/" target="_blank">Google Fonts</a>, which
                    supplied both of these fonts free of charge.  Another site that has excellent font varieties is <a href="https://www.fontsquirrel.com/" target="_blank">FontSquirrel</a>.
                </p>
            </article>
            <div className="art-image-container">
                <Container>
                    <Row>
                        <Col className="font-col" md={12} lg={8}>
                        <h4>Serif</h4>
                            <img className="color-image" src={serif} alt="serif vs. sans-serif fonts" />
                        </Col>
                        <Col className="font-col" md={12} lg={4}>
                        <h4>Display</h4>
                            <img className="color-image" src={display} alt="display fonts" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="home-container">
                    <Link to="/application-planning"><img src={left} className="left-bottom" /></Link>
                    <Link to="/blog"><img src={home} className="home" /></Link>
                    <Link to="/home"><img src={right} className="right-bottom" /></Link>
            </div>
        </div>
    )
}

export default ColorTheory;