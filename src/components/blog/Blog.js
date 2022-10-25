import React from 'react'
import './blog.css'

const Blog = () => {
    return (
        <div>
            <div className="blog">
                <div className="blog--image">
                    <img src="https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className="blog--credits">
                        <img className='blog--user-image' src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <div className="">
                            <span className="blog--user-name">John</span>
                            <p className="blog--category">Science, Arts</p>
                            <p className="blog--uploaded-date">
                                Posted 2 days ago
                            </p>
                        </div>
                        <div className="blog--user-actions">
                            <ion-icon name="create"></ion-icon>
                            <ion-icon name="trash-sharp"></ion-icon>
                        </div>
                    </div>
                </div>
                <div className="blog--content">
                    <h1 className='blog--title'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, sint.</h1>

                    <p className="blog--description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat dolorem nihil tenetur maxime eius quod unde ducimus magni reiciendis velit! Fuga atque mollitia dolorem facilis, pariatur commodi aliquam dolor corporis dicta, porro quia doloribus minima alias veritatis praesentium impedit consectetur sit? Nemo, id officia! Labore iste nesciunt temporibus hic reiciendis, saepe illum quia, fuga laboriosam incidunt nam exercitationem assumenda, alias esse architecto. Dolorem, quod perferendis. Assumenda exercitationem officiis cum voluptas? Modi, dolores iste ut minima impedit reiciendis adipisci eveniet facilis ad? Sequi dolor perferendis deleniti reiciendis, harum suscipit eveniet ea consequuntur in velit laudantium dolores, totam eum accusamus maiores quibusdam cupiditate vero. Corporis porro tenetur sint, adipisci sed excepturi nobis autem assumenda quae cupiditate? Nobis quam quidem aperiam non! Pariatur expedita vel accusantium quaerat. Mollitia, expedita voluptates tempore vel quo commodi pariatur error eos sunt, dolor odit nihil maxime, vitae laborum velit dolorem libero delectus at id fugit perferendis. Ipsam porro, labore atque ipsum natus non quibusdam omnis suscipit ducimus excepturi exercitationem quia beatae rem. Sequi ullam dolor eaque tempora animi laudantium esse quas! Aut, architecto! Minima vero hic, in voluptas quia cupiditate molestiae ipsam et alias, expedita nisi eligendi corporis, earum fugit. Sit, aliquid dolore sapiente numquam fugiat amet ut, dolor expedita, laudantium omnis rerum. Debitis accusamus magni odit unde impedit delectus, fugit quas officiis exercitationem animi natus ipsa qui maxime quia est quos ipsam numquam eligendi, quasi adipisci dolor quam similique eveniet molestiae. Saepe quia, architecto, nisi possimus animi facere fugit provident officia odit delectus atque itaque, eligendi autem? Optio ab obcaecati fugiat minus possimus autem nesciunt modi? Fugit mollitia molestiae corrupti error quisquam voluptatem facilis ullam, accusamus, omnis nisi, ut iure? Non temporibus sapiente ipsam hic error quaerat deserunt reprehenderit mollitia itaque, possimus quidem sit, totam dignissimos laborum. Pariatur error vero ducimus. Natus reiciendis accusamus rerum voluptatibus fuga illum, consectetur vero impedit ea! Ipsam est consequuntur rerum necessitatibus laudantium iure debitis facilis, harum esse reprehenderit illo non enim aliquid eos maxime nam quo officia dolores quidem a eligendi accusantium minima pariatur. Quasi commodi deleniti ducimus omnis modi et atque eos, exercitationem rerum numquam maxime? Nobis magni ab fugiat nulla. Voluptate quos cumque asperiores blanditiis fuga deleniti consectetur?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Blog
