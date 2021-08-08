export const destructureArray = (array) => {
  const nationalConferences = array.filter(
    (item) => item.content_type === 'National Conference'
  );
  const internationalConferences = array.filter(
    (item) => item.content_type === 'International Conference'
  );
  const seminars = array.filter((item) => item.content_type === 'Seminar');
  const scholar = array.filter((item) => item.content_type === 'Scholar');
  const publishedBooks = array.filter(
    (item) => item.content_type === 'Book Published'
  );
  const awards = array.filter((item) => item.content_type === 'Award');
  const journals = array.filter((item) => item.content_type === 'Journal');
  const memberships = array.filter(
    (item) => item.content_type === 'Membership'
  );
  const fundProjects = array.filter(
    (item) => item.content_type === 'Fund Project'
  );
  const researchPapers = array.filter(
    (item) => item.content_type === 'Research Paper'
  );

  return {
    nationalConferences,
    internationalConferences,
    seminars,
    scholar,
    publishedBooks,
    awards,
    journals,
    memberships,
    fundProjects,
    researchPapers,
  };
};
