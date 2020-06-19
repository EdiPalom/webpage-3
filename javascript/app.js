class Slider{
   
    constructor()
    {
        this.index_images = 0;
        this.images = [];
        this.slide = document.getElementById('slides');
    }

    add(path) 
    {
        this.images.push(path);
    }

    change_images()
    {
        this.slide.src=this.images[this.index_images];

        if(this.index_images < 4)
        {
            this.index_images++;
        }else
        {
            this.index_images = 0;
        }
    }
}

window.onload = function()
{
    console.log("content loaded");

    const slider = new Slider();

    slider.add('img/slides/slider1.png');
    slider.add('img/slides/slider2.jpg');
    slider.add('img/slides/slider3.jpg');
    slider.add('img/slides/slider4.jpg');
    slider.add('img/slides/slider5.jpg');

    const timer = function()
    {
        setTimeout(timer,1000);
        slider.change_images();
    }
    
    timer();
};
