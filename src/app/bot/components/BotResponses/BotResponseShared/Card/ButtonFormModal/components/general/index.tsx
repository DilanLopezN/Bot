import React, { FC } from 'react'
import { StyledFormikField } from '../../../../../../../../../shared/StyledForms/StyledFormikField/StyledFormikField';
import { LabelWrapper } from '../../../../../../../../../shared/StyledForms/LabelWrapper/LabelWrapper';
import I18n from '../../../../../../../../i18n/components/i18n';
import { ButtonSelector } from '../../../ButtonTypeSelector/ButtonTypeSelector';
import { TypeInput } from '../../../TypeInput/TypeInput';
import { Interaction, InteractionType } from "../../../../../../../../../model/Interaction";
import { ResponseButtonType } from 'kissbot-core';
import { GeneralProps } from './props';

const General: FC<GeneralProps> = ({
  getTranslation,
  interactionList,
  values,
  touched,
  errors,
  isSubmitted,
  setFieldValue,
}) => {

  const getValue = (type) => {
    if (type == ResponseButtonType.goto) {
      const filteredInteractionList = interactionList.filter((interation: Interaction) => {
        return interation.type != InteractionType.contextFallback && interation.type != InteractionType.fallback && interation.type != InteractionType.container;
      });
      return filteredInteractionList[0]._id;
    }
    return "";
  }

  return (
    <div>
      <LabelWrapper
        label={getTranslation('Button title')}
        tooltip={getTranslation('Button title that will appear on bot conversation card')}
        validate={{
          touched, errors,
          isSubmitted: isSubmitted,
          fieldName: "title"
        }}
      >
        <StyledFormikField type="text" name="title" placeholder={getTranslation('Button title')} />
      </LabelWrapper>
      <LabelWrapper
        label={getTranslation('Button Description')}
        tooltip={getTranslation('Description for button in list')}
        validate={{
          touched, errors,
          isSubmitted: isSubmitted,
          fieldName: "description"
        }}
      >
        <StyledFormikField maxLength={72} type="text" name="description" placeholder={getTranslation('Button Description')} />
      </LabelWrapper>
      <ButtonSelector
        onChange={type => {
          setFieldValue('type', type);
          setFieldValue('value', getValue(type));
        }}
        type={values.type}
      />
      <TypeInput
        type={values.type as any || ResponseButtonType.goto}
        value={values.value || ""}
        touched={touched}
        errors={errors}
        setFieldValue={setFieldValue}
        isSubmitted={isSubmitted}
      />
    </div>
  )
}

export default I18n(General);
