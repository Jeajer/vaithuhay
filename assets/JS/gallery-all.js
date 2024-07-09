document.addEventListener('DOMContentLoaded', function() {
    const tagButtons = document.querySelectorAll('.community-setup .community-search .tags-container .tag-btn');
    const searchTagsContainer = document.querySelector('.community-setup .community-search .search-container .search-tags');

    tagButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tagText = this.textContent;

            if (!this.classList.contains('selected')) {
                addTagToSearch(tagText, this);
                this.classList.add('selected');
            }
        });
    });

    function addTagToSearch(tagText, button) {
        const tag = document.createElement('div');
        tag.classList.add('filter-tag');
        tag.innerHTML = `${tagText} <span class="remove-tag">&times;</span>`;
        
        tag.querySelector('.remove-tag').addEventListener('click', function() {
            tag.remove();
            button.classList.remove('selected');
        });

        searchTagsContainer.appendChild(tag);
    }
});