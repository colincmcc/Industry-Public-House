import React from 'react';
import styled from 'styled-components';
// Material-UI
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';

// Misc
import placeHolderAvatar from '../../../common/assets/img/lightbulb_solo.png';
import theme from '../../common/styled/theme';

const UserAvatarComponent = (props) => {
  const currentUser = {
    avatar: placeHolderAvatar,
    userName: 'Colin McCullough',
    userPoints: 0,
    userLevel: 0,
    currentBonus: 0,
  };
  return (
    <UserAvatarWrapper>
      <UserMeta>
        <Avatar
          src={currentUser.avatar}
          classes={{ root: classes.avatarLarge }}
        />
        <UserName>{currentUser.userName}</UserName>
      </UserMeta>
      <PointsMeta>
        <UserPoints>{currentUser.userPoints}</UserPoints>
        <UserLevel>
          {' '}
          {currentUser.userLevel}
          {' '}
        </UserLevel>
      </PointsMeta>
    </UserAvatarWrapper>
  );
};

export default withStyles(theme.materialUI)(UserAvatarComponent);
const UserAvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const UserMeta = styled.div`
  flex-direction: row;
`;
const PointsMeta = styled.div`
  display: flex;
  flex-direction: row;
`;
const UserName = styled.div`
  ${props => props.theme.fontStyles.subheading};
  color: ${props => props.theme.colors.whiteTheme};
`;

const UserPoints = styled.div`
  ${props => props.theme.fontStyles.heading};
  font-weight: 900;
`;
const UserLevel = styled.div``;
