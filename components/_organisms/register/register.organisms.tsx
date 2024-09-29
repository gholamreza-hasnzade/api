'use client';

// * import tools
import { Fragment } from 'react';

//* import style
import { ModalMoleculeStyle as S } from '@/components/_organisms/register/register.organisms.style';

//* import components
import { AddModal, ValidationInput } from '@/components/_molecules';
import {
  Image,
  Typography,
  LinkAtom,
  Button,
  Form,
  Flex,
  Loader,
  Checkbox,
} from '@/components/_atoms';

// * import contents
import { IMAGES } from '@/constants/contents';

// * import hooks
import useRegisterForm from '@/hooks/register/useRegisterForm';

export const RegisterOrganisms = () => {
  const { form, handleChange, handleFormChange, handleSubmit, resetForm } = useRegisterForm();

  const {
    holooSoftwareSerial,
    holooSoftwareCode,
    ownerMobileNo,
    isOpenRule,
    isOpenVerify,
    formError,
    isLoading,
    acceptTerms,
    response,
  } = form;

  
  const renderBodyRules = (
    <Flex direction="column">
      <Flex height={400}>
        <Typography fontSize={14} fontWeight={400}>
          وم از صنعت چاپ، و با استفاده از طراحان گرافیک
        </Typography>
      </Flex>

      <Flex direction="column" align="flex-start" gap="8px">
        <Flex align="center" gap="10px">
          <Typography fontSize={14} fontWeight={400}>
            آیا این قوانین را قبول میکنید ؟
          </Typography>
          <Checkbox
            id="rule"
            title="بله قبول میکنم"
            checked={acceptTerms}
            onChange={() => handleFormChange('acceptTerms', !acceptTerms)}
          />
        </Flex>

        <Button
          variant="primary"
          type="button"
          onClick={() => handleFormChange('isOpenRule', false)}
        >
          قوانین
        </Button>
      </Flex>
    </Flex>
  );

  const renderConfirm = (
    <Fragment>
      <Flex direction="column">
        <Flex gap="10px" direction="column">
          <Typography>کد تایید</Typography>
          <Typography>{response?.publicKey}</Typography>
        </Flex>
        <br />
        <Flex gap="10px" direction="column">
          <Typography> لینک دانلود</Typography>
          <Typography>
            <a download href="/download/app.txt">
              {response?.downloadURL}
            </a>
          </Typography>
        </Flex>

        <Flex>
          <Button variant="primary" type="button" onClick={() => resetForm()}>
            بستن صفحه
          </Button>
        </Flex>
      </Flex>
    </Fragment>
  );
  return (
    <>
      <AddModal
        title="قوانین و مقررات"
        renderBody={renderBodyRules}
        isOpen={isOpenRule}
        onClose={() => handleFormChange('isOpenRule', false)}
      />
      <AddModal
        title="فرم تایید"
        renderBody={renderConfirm}
        isOpen={isOpenVerify}
        onClose={() => handleFormChange('isOpenVerify', false)}
      />

      <S.RegisterWrapper>
        <Form onSubmit={handleSubmit}>
          {isLoading ? (
            <Flex align="center" justify="center" width={670} height={470}>
              <Loader />
            </Flex>
          ) : (
            <>
              <S.RegisterHeader>
                <Flex direction="column">
                  <Flex direction="row" align="center" justify="space-between">
                    <Image src={IMAGES.LOGO} alt="LOGO" width={100} height={40} />
                  </Flex>
                  <Typography>گروه فناوری اطلاعات هلو</Typography>
                </Flex>
                <S.RegisterHeaderBotton>
                  <Typography>
                    مجوز دسترسی اطلاعات نرم افزار هلو به شرکت اسنپ (اسنپ مارکت)
                  </Typography>
                </S.RegisterHeaderBotton>
              </S.RegisterHeader>

              <ValidationInput
                title="سریال نرم افزار هلو"
                isRequired={true}
                placeholder="برای مثال: ABC123456789EFG"
                type="text"
                variant="primary"
                value={holooSoftwareSerial}
                name="holooSoftwareSerial"
                onChange={(e) => handleChange('holooSoftwareSerial', e.target.value)}
                formError={formError?.holooSoftwareSerial}
              />

              <ValidationInput
                title="کد 12 رقمی"
                isRequired={true}
                placeholder="برای مثال: 123456789123"
                type="text"
                variant="primary"
                value={holooSoftwareCode}
                name="holooSoftwareCode"
                onChange={(e) => handleChange('holooSoftwareCode', e.target.value)}
                formError={formError?.holooSoftwareCode}
                helperTitle="برای دریافت کد 12 رقمی بهش کل SMARTHELP در نرم افزار هلو مراجعه کنید"
              />

              <ValidationInput
                title={'شماره موبایل مالک نرم افزار'}
                placeholder="برای مثال: 09121234567"
                type="text"
                variant="primary"
                value={ownerMobileNo}
                name="ownerMobileNo"
                onChange={(e) => handleChange('ownerMobileNo', e.target.value)}
                formError={formError?.ownerMobileNo}
              />
            </>
          )}

          <Flex direction="column">
            {!isLoading && (
              <Flex align="center" gap="3px">
                <Typography fontSize={10}> تایید شما به معنای پذیرش</Typography>
                <LinkAtom
                  href="#"
                  color="#4286f6"
                  onClick={() => handleFormChange('isOpenRule', true)}
                >
                  {' '}
                  شرایط و قوانین{' '}
                </LinkAtom>
                <Typography fontSize={10}>حریم خصوصی است</Typography>
              </Flex>
            )}

            {!isLoading ? (
              <Button type="submit" variant="primary" size="small">
                تایید دسترسی
              </Button>
            ) : (
              <Button type="button" variant="primary" size="small" onClick={() => resetForm()}>
                برگشت به صفحه قبل
              </Button>
            )}
          </Flex>
        </Form>
      </S.RegisterWrapper>
    </>
  );
};
