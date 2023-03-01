const topicList = document.querySelector('#topic-list');
const createTopicButton = document.querySelector('#create-topic-button');
const topicForm = document.querySelector('#create form');
const topicDetails = document.querySelector('#topic-details');

// An array to hold the topics
const topics = [];

// Function to display the topics
function displayTopics() {
  // Clear the topic list
  topicList.innerHTML = '';

  // Loop through the topics and add them to the list
  topics.forEach(topic => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.textContent = topic.title;
    link.href = `#${topic.id}`;
    li.appendChild(link);
    topicList.appendChild(li);
  });
}

// Function to create a new topic
function createTopic(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the values from the form
  const title = topicForm.title.value;
  const body = topicForm.body.value;

  // Generate a unique ID for the topic
  const id = Date.now();

  // Create the topic object and add it to the topics array
  const topic = { id, title, body };
  topics.push(topic);

  // Clear the form
  topicForm.reset();

  // Display the updated topic list
  displayTopics();
}

// Function to display the details of a topic
function displayTopicDetails(event) {
  // Prevent the default behavior of clicking on a link
  event.preventDefault();

  // Get the ID of the topic from the URL hash
  const id = parseInt(event.target.hash.slice(1));

  // Find the topic with the matching ID
  const topic = topics.find(topic => topic.id === id);

  // Display the title and body of the topic in the topic details section
  topicDetails.innerHTML = `
    <h2>${topic.title}</h2>
    <p>${topic.body}</p>
  `;
}

// Add event listeners to the create topic button and the topic list
createTopicButton.addEventListener('click', createTopic);
topicList.addEventListener('click', displayTopicDetails);