import React from 'react'

import Container from '../atoms/Container'
import Heading from '../atoms/Heading'
import Paragraph from '../atoms/Paragraph'

import { choices, decisions } from '../../utils/designTokens'

const Conduct = () => {
  return (
    <section className="conduct">
      <Container>
        <Heading size={1} color="blue" withMargin>
          Code of Conduct
        </Heading>
        <Paragraph color="blue">
          We want everyone to enjoy this conference to the fullest, to make each
          person feel safe and welcome. To achieve this, we have defined a{' '}
          <strong>Code of Conduct</strong>, an agreement in which you will take
          an active role. This agreement is simple: be kind to everyone at all
          times, regardless of gender, gender identity, age, sexual orientation,
          disability, physical appearance, race, ethnicity, nationality,
          religion, points of view or political experience.
        </Paragraph>
      </Container>
      <div className="bird"></div>
      <style jsx>{`
        .conduct {
          position: relative;
          background: ${choices.colors.brand.chiffon};
          padding: 100px ${decisions.container.padding};
          overflow: hidden;
        }

        .conduct :global(.heading),
        .conduct :global(.paragraph) {
          position: relative;
          z-index: 1;
        }

        .bird {
          position: absolute;
          display: inline-block;
          background-image: url('/static/images/code-of-conduct-bird.svg');
          background-position: top right;
          background-repeat: no-repeat;
		  background-size: cover;
		  top: 50px;
		  left: 0;
          width: 400px;
          height: 400px;
          opacity: 0.15;
        }
      `}</style>
      <style jsx>{`
        @media (${decisions.queries.screens.desktop}) {
          .conduct {
            overflow: visible;
            padding: 100px ${decisions.container.padding} 100px 400px;
          }

          .bird {
			opacity: 1;
			width: 300px;
			height: 300px;
          }
        }
      `}</style>
    </section>
  )
}

export default Conduct