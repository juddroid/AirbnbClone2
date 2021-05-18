import styled from 'styled-components';
import FaceBookLogo from '../../../../svg/FaceBookLogo';
import TwitterLogo from '../../../../svg/TwitterLogo';
import InstagramLogo from '../../../../svg/InstagramLogo';
import NaverBlogLogo from '../../../../svg/NaverBlogLogo';
import PostLogo from '../../../../svg/PostLogo';

const SocialMedia = () => {
  return (
    <SocialMediaStyle>
      <SocialMediaUl>
        <SocialLogoStyle>
          <SocialLogoAnchor>
            <FaceBookLogo />
          </SocialLogoAnchor>
        </SocialLogoStyle>
        <SocialLogoStyle>
          <SocialLogoAnchor>
            <TwitterLogo />
          </SocialLogoAnchor>
        </SocialLogoStyle>
        <SocialLogoStyle>
          <SocialLogoAnchor>
            <InstagramLogo />
          </SocialLogoAnchor>
        </SocialLogoStyle>
        <SocialLogoStyle>
          <SocialLogoAnchor>
            <NaverBlogLogo />
          </SocialLogoAnchor>
        </SocialLogoStyle>
        <SocialLogoStyle>
          <SocialLogoAnchor>
            <PostLogo />
          </SocialLogoAnchor>
        </SocialLogoStyle>
      </SocialMediaUl>
    </SocialMediaStyle>
  );
};

export default SocialMedia;

const SocialMediaStyle = styled.div`
  display: none;

  @media (min-width: 744px) {
    display: block;
    margin-left: 32px;
  }
`;

const SocialMediaUl = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
  display: flex;
`;

const SocialLogoStyle = styled.li`
  :not(last-child) {
    margin-right: 24px;
  }
`;

const SocialLogoAnchor = styled.a`
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  font-style: inherit;
  font-variant: inherit;
  line-height: inherit;
  color: #222;
  text-decoration: none;
`;
