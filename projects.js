// Projects Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Project Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter projects
            projectItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Project Detail Modal
    const viewProjectLinks = document.querySelectorAll('.view-project');
    const projectDetails = document.querySelector('.project-details');
    const projectDetailItems = document.querySelectorAll('.project-detail-item');
    const closeDetailBtns = document.querySelectorAll('.close-detail');
    
    viewProjectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get project ID
            const projectId = this.getAttribute('href').substring(1);
            
            // Show project details container
            projectDetails.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Show specific project detail
            document.getElementById(projectId).classList.add('active');
        });
    });
    
    closeDetailBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Hide project details container
            projectDetails.classList.remove('active');
            document.body.style.overflow = 'auto';
            
            // Hide all project details
            projectDetailItems.forEach(item => {
                item.classList.remove('active');
            });
        });
    });
    
    // Close modal when clicking outside
    projectDetails.addEventListener('click', function(e) {
        if (e.target === projectDetails) {
            projectDetails.classList.remove('active');
            document.body.style.overflow = 'auto';
            
            // Hide all project details
            projectDetailItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });
    
    // Thumbnail Image Gallery
    const thumbnailImages = document.querySelectorAll('.thumbnail-images img');
    
    thumbnailImages.forEach(img => {
        img.addEventListener('click', function() {
            // Get parent detail item
            const detailItem = this.closest('.project-detail-item');
            
            // Get main image
            const mainImage = detailItem.querySelector('.main-image img');
            
            // Swap images
            const tempSrc = mainImage.src;
            mainImage.src = this.src;
            
            // Add animation
            mainImage.style.animation = 'none';
            setTimeout(() => {
                mainImage.style.animation = 'fadeIn 0.3s ease-out forwards';
            }, 10);
        });
    });
});