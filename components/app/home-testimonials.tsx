import { testimonials } from "@/constants"

const HomeTestimonials = () => {
  return (
    <section className="mx-auto max-w-7xl bg-white px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-4xl font-bold leading-8 tracking-tight text-[#EB9626] max-md:text-start max-md:text-3xl max-sm:text-2xl md:max-w-3xl">
          Testimonials
        </h2>
        <p className="mt-2 text-xl font-bold tracking-tight text-gray-800 max-md:text-start sm:text-2xl">
          What Our Patients Are Saying
        </p>
      </div>
      <div className="mx-auto mt-10 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
        <div className="-mt-14 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
          {testimonials.map((testimonial: any) => (
            <div
              key={testimonial.author.handle}
              className="pt-8 sm:inline-block sm:w-full sm:px-4"
            >
              <figure className="rounded-2xl bg-gray-100 p-8 text-sm leading-6">
                <blockquote className="text-gray-900">
                  <p>{`“${testimonial.body}”`}</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <img
                    className="h-10 w-10 rounded-full bg-gray-50"
                    src={testimonial.author.imageUrl}
                    alt=""
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.author.name}
                    </div>
                    <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeTestimonials
