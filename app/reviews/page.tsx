import { IconButton } from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';
import SectionTitle from '@/components/global/SectionTitle';
import ReviewCard from '@/components/reviews/ReviewCard';
import { deleteReviewAction, fetchProductReviewsByUser } from '@/utils/actions';
import { RxChatBubble } from 'react-icons/rx';
export default async function ReviewsPage() {
  const reviews = await fetchProductReviewsByUser();
  if (reviews.length === 0)
    return <SectionTitle text='You have no reviews yet' />;
  return (
    <>
      <SectionTitle text='Your Reviews' Icon={RxChatBubble} />
      <section className='grid md:grid-cols-2 gap-8 mt-8'>
        {reviews.map((review) => {
          const { comment, rating } = review;
          const { name, image } = review.product;
          const reviewInfo = { comment, rating, name, image };
          return (
            <ReviewCard key={review.id} reviewInfo={reviewInfo}>
              <DeleteReview reviewId={review.id} />
            </ReviewCard>
          );
        })}
      </section>
    </>
  );
}

const DeleteReview = ({ reviewId }: { reviewId: string }) => {
  const deleteReview = deleteReviewAction.bind(null, { reviewId });
  return (
    <FormContainer action={deleteReview}>
      <IconButton actionType='delete' />
    </FormContainer>
  );
};
