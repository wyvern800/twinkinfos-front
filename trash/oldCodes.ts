/* eslint-disable import/prefer-default-export */
// import { equipment } from '../../utils/constants';

/**
 * Parses the build for better format to
 *
 * @param { Build } requestBody The request body containing the build data from front-end
 * @param { any } itemsRepository The item repository
 * @returns
 */
/*export const parseBuild = (requestBody: any, itemsRepository: any): any => {
  const newBuildObject: any = {};

  Object.entries(requestBody).forEach(
    ([buildKey, buildValue]: [string, any]) => {
      if (buildValue !== null && equipment.includes(buildKey)) {
        const newBuildEquipmentParsed: any = {};

        Object.entries(buildValue).forEach(([k, v]: [string, any]) => {
          if (k === 'hordeMainItemId' || k === 'allianceMainItemId') {
            const isHorde = k === 'hordeMainItemId';
            const item = itemsRepository.getById(Number(v));
            if (item) {
              newBuildEquipmentParsed[`${isHorde ? 'horde' : 'alliance'}Item`] =
                item;
            }
          } else if (k === 'alternatives') {
            const parsedAlternatives = v.map((alt: any) => {
              const { hordeItemId, allianceItemId, priority } = alt;
              const isHorde = typeof hordeItemId === 'number';
              const item = itemsRepository.getById(
                Number(isHorde ? hordeItemId : allianceItemId),
              );
              return {
                [isHorde ? 'hordeItem' : 'allianceItem']: item
                  ? { ...item, isHorde }
                  : null,
                priority,
              };
            });
            newBuildEquipmentParsed.alternatives = parsedAlternatives.sort(
              (a, b) => a.priority - b.priority,
            );
          }
        });

        // Only delete if there are actual keys to delete
        if (
          Object.keys(newBuildObject).some(
            nBOKey => !equipment.includes(nBOKey),
          )
        ) {
          Object.keys(newBuildObject).forEach(nBOKey => {
            if (!equipment.includes(nBOKey)) {
              delete newBuildObject[nBOKey];
            }
          });
        }

        newBuildObject[buildKey] = newBuildEquipmentParsed;
      }
    },
  );

  return newBuildObject;
};*/
