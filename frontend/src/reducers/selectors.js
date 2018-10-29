export const getPartyOpinionForUser = ({entities}, partyId, userId) => {
    return Object.values(entities.opinions).filter(opinion => opinion.author === userId && opinion.party === partyId);
}
